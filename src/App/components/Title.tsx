import React from 'react'
import styled from 'styled-components'

import { Text } from 'shared'
import { GitHub, Twitter } from '@material-ui/icons'

const LargeHeader = styled.h1`
    margin: 0;
    font-size: 2em;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em;

    div {
        width: calc(100vw/3);
    }

    div:nth-child(2){
        text-align: center;
    }

    div:nth-child(3){
        text-align: right;
        font-size: 2em;

        a {
            margin-left: 1em;
        }
    }
`

const Title = () => {
    return <TitleWrapper>
        <div><a href="">Submit a Link!</a></div>
        <div>
            <LargeHeader>Online Outings Only</LargeHeader>
            <Text>
                A collection of things to do online with others.
            </Text>
        </div>
        <div>
            <a target="_blank" href="https://github.com/TravisBumgarner/online-outings"><GitHub /></a>
            <a target="_blank" href="https://twitter.com/travis_the_makr"><Twitter /></a>
        </div>
    </TitleWrapper>
}

export default Title