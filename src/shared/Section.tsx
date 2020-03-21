import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const NormalSection = styled.div`
    background-color: var(--accent-color);
    border-radius: 1em;
    padding: 1em 2em;
    margin: 1em 0;
`

type Props = {
    children: React.ReactNode
}

const PageSection = ({ children }: Props) => {
    return <NormalSection>{children}</NormalSection>
}

export default PageSection

