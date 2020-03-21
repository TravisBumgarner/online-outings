import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {
    Title,
    Navigation,
    Home,
    Error,
    ScrollToTop,
} from './components'
import { GlobalStyle } from 'theme'


const AppWrapper = styled.div`
`

const ContentWrapper = styled.div`

`

const App = () => {
    return (
        <AppWrapper>
            <GlobalStyle />
            <BrowserRouter>
                <ScrollToTop />
                <Title />
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </AppWrapper>
    )
}

export default App