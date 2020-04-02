import React from 'react'
import styled from 'styled-components'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Tune, Close } from '@material-ui/icons'
import axios from 'axios'

import { ActivityCard } from './components'

import { Header, Text } from 'shared'

const HomeWrapper = styled.div`
    display: flex;
`

const SIDEBAR_WIDTH = '300px'

const Sidebar = styled.div`
    z-index: 999;
    width: ${SIDEBAR_WIDTH};
    max-width: ${SIDEBAR_WIDTH};
    padding: 15px;
    margin-right: 15px;
    background-color: var(--background-color);

    ${({ showSidebar }) => showSidebar ? `display: block;` : `display: none;`}

    @media (max-width: 950px) {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0;
        height: 100vh;
        overflow-y: scroll;
        border-right: 5px solid var(--accent-color);
    }

    @media (min-width: 950px) {
        display: block;
        border-radius: 15px;
        background-color: var(--accent-color);
    }
`

const CloseSidebar = styled(Close)`
    display: none !important;

    @media (max-width: 950px) {
        display: block !important;
    }
`

const Main = styled.div`
    flex-grow: 1;
`

const FiltersBar = styled.div`
   min-width: 220px; 
`

const ToggleFiltersBar = styled(Button)`
    display: none !important;

    @media (max-width: 950px) {
        font-size: 1.5em;
        width: 100%;
        padding: 10px;
        margin: 1em 0 !important;
        display: block !important;
    }
`

type FilterProps = {
    value: boolean
    setValue: (value: boolean) => void
    label: string
    name: string
}

const Filter = ({ value, setValue, label, name }: FilterProps) => {
    return <FormControlLabel
        control={
            <Checkbox
                checked={value}
                onChange={() => setValue(!value)}
                name={name}
                color="primary"
            />
        }
        label={label}
    />
}

const Grid = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

type SelectableTypes = {
    game: boolean, chat: boolean
}

const DEFAULT_SELECTED_TYPES: SelectableTypes = {
    game: true,
    chat: true
}

const Home = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)
    const [activities, setActivities] = React.useState<any>([])

    React.useEffect(() => {
        Promise.all([
            axios.get('http://localhost:8000/activities')
        ]).then(([
            activities,
        ]) => {
            setActivities(activities.data)
        }).catch(error => {
            console.log(error)
            setIsError(true)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])
    console.log(activities)
    const [hideHasCost, setHideHasCost] = React.useState(false)
    const [selectableTypes, setSelectableTypes] = React.useState<SelectableTypes>(DEFAULT_SELECTED_TYPES)
    const [showSidebar, setShowSidebar] = React.useState(false)
    const resetFilters = () => {
        setHideHasCost(false)
        setSelectableTypes(DEFAULT_SELECTED_TYPES)
    }

    const ActivitiesToShow = activities
        // .filter(({ hasCost }) => hideHasCost ? !hasCost : true)
        .filter(({ category }) => category.some(({ name }) => selectableTypes[name]))
        .map(params => <ActivityCard key={params.id} {...params} />)

    if (isError) {
        return <HomeWrapper>
            Oh heck. Whoops
        </HomeWrapper>
    }

    if (isLoading) {
        return <HomeWrapper>
            One heckin moment please.
        </HomeWrapper>
    }

    return (
        <HomeWrapper>

            <Sidebar showSidebar={showSidebar}>
                <FiltersBar>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Header size="large"><Tune style={{ position: "relative", top: "4px" }} /> Filters</Header>
                        <CloseSidebar onClick={() => setShowSidebar(!showSidebar)} />
                    </div>
                    <Header size="medium">By Activity</Header>
                    {
                        Object.keys(selectableTypes).map((selectableType: keyof SelectableTypes) =>
                            <Filter
                                value={selectableTypes[selectableType]}
                                setValue={() => setSelectableTypes({ ...selectableTypes, [selectableType]: !selectableTypes[selectableType] })}
                                name={`show-${selectableType}`}
                                label={selectableType.charAt(0).toUpperCase() + selectableType.slice(1)}
                            />
                        )
                    }
                    <Header size="medium">Special</Header>
                    <Filter
                        value={hideHasCost}
                        setValue={setHideHasCost}
                        name="has-cost"
                        label="Show Only Free Content"
                    />
                    <Button variant="contained" onClick={resetFilters}>Reset Filters</Button>
                </FiltersBar>
            </Sidebar>
            <Main>
                <ToggleFiltersBar variant="contained" onClick={() => setShowSidebar(!showSidebar)}><Tune /> Toggle Filters</ToggleFiltersBar>
                <Grid>
                    {ActivitiesToShow}
                </Grid>
            </Main>
        </HomeWrapper>
    )
}

export default Home