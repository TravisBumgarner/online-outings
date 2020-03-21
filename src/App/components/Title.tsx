import React from 'react'
import styled from 'styled-components'

import { Text } from 'shared'

const LargeHeader = styled.h1`
`

const TitleWrapper = styled.div`

`

const Title = () => {
    return <TitleWrapper>
        <LargeHeader>Online Outings Only</LargeHeader>
        <Text>
            A collection of things to do online with others.
        </Text>
    </TitleWrapper>
}

export default Title