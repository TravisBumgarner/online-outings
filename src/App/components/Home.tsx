import React from 'react'
import styled from 'styled-components'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

import { Header, Text, PageWrapper, Section } from 'shared'
import { activities } from 'content'

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

const Home = () => {
    const classes = useStyles();
    const [isMature, SetIsMature] = React.useState(false);

    const ActivitiesToShow = activities
        .filter(({ age }) => isMature ? age >= 18 : true)
        .map(({ title }) => <p>{title}</p>)

    return (
        <PageWrapper>
            <Section>
                <FiltersBar>
                    <Filter
                        value={isMature}
                        setValue={SetIsMature}
                        name="is-nature"
                        label="Hide Mature Content"
                    />
                </FiltersBar>
            </Section>
            <Section>
                {ActivitiesToShow}
            </Section>
        </PageWrapper>
    )
}

export default Home