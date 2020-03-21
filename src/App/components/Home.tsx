import React from 'react'
import styled from 'styled-components'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

import { Header, Text, PageWrapper, Section } from 'shared'
import content from './content'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const FiltersBar = styled.div`
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

const Activity = ({ title }: ActivityProps) => {
    return <Section>
        <Header size="medium">{title}</Header>
    </Section>
}


const Home = () => {
    const classes = useStyles();
    const [hideIsMature, setHideIsMature] = React.useState(false);
    const [hideHasCost, setHideHasCost] = React.useState(false);

    const ActivitiesToShow = content
        .filter(({ isMature }) => hideIsMature ? !isMature : true)
        .filter(({ hasCost }) => hideHasCost ? !hasCost : true)
        .map(({ title }) => <Activity title={title} />)

    return (
        <PageWrapper>
            <Section>
                <FiltersBar>
                    <Header size="medium">Filters</Header>
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
                        label="Hide Not Free"
                    />
                </FiltersBar>
            </Section>
            {ActivitiesToShow}
        </PageWrapper>
    )
}

export default Home