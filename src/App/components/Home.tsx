import React from 'react'
import { Link } from 'react-router-dom'

import { Header, Text, PageWrapper, Section, List } from 'shared'

const Home = () => {
    return (
        <PageWrapper>
            <Section>
                <Header size="large">Hey!</Header>
                <Text>Things here.</Text>
            </Section>
        </PageWrapper>
    )
}

export default Home