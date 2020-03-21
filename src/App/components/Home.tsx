import React from 'react'
import styled from 'styled-components'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { Header, Text } from 'shared'
import content from './content'

const FiltersBar = styled.div`
    background-color: white;
    border-radius: 15px;
    padding: 15px;
    margin: 15px 0px;
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

type ActivityProps = {
    title: string
}

const Grid = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Activity = styled(({ title, className }: ActivityProps & { className: string }) => {
    return <div className={className}>
        <Header size="medium">{title}</Header>
    </div>
})`
    background-color: white;
    border-radius: 15px;
    padding: 15px;
`

type ActivityTypes = {
    game: boolean, chat: boolean
}

const DEFAULT_ACTIVITY_TYPES: ActivityTypes = {
    game: true,
    chat: true
}

const Home = () => {
    const [hideIsMature, setHideIsMature] = React.useState(false);
    const [hideHasCost, setHideHasCost] = React.useState(false);
    const [activities, setActivities] = React.useState<ActivityTypes>(DEFAULT_ACTIVITY_TYPES);

    const clearFilters = () => {
        setHideIsMature(false)
        setHideHasCost(false)
        setActivities(DEFAULT_ACTIVITY_TYPES)
    }

    const ActivitiesToShow = content
        .filter(({ isMature }) => hideIsMature ? !isMature : true)
        .filter(({ hasCost }) => hideHasCost ? !hasCost : true)
        .filter(({ activityTypes }) => activityTypes.some(activity => activities[activity]))
        .map(({ title }) => <Activity title={title} />)

    return (
        <div>
            <FiltersBar>
                <Header size="large">Filters</Header>

                <Header size="medium">By Activity</Header>
                {
                    Object.keys(activities).map((activity: keyof ActivityTypes) =>
                        <Filter
                            value={activities[activity]}
                            setValue={() => setActivities({ ...activities, [activity]: !activities[activity] })}
                            name={`show-${activity}`}
                            label={activity.charAt(0).toUpperCase() + activity.slice(1)}
                        />
                    )
                }
                <Header size="medium">Special</Header>
                <Filter
                    value={hideIsMature}
                    setValue={setHideIsMature}
                    name="is-nature"
                    label="Hide Mature Content"
                />
                <Filter
                    value={hideHasCost}
                    setValue={setHideHasCost}
                    name="has-cost"
                    label="Show Only Free Content"
                />
                <Button variant="contained" onClick={clearFilters}>Clear Filters</Button>
            </FiltersBar>
            <Grid>
                {ActivitiesToShow}
            </Grid>
        </div>
    )
}

export default Home