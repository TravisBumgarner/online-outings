import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const NormalSection = styled.div`
`

type Props = {
    children: React.ReactNode
}

const PageSection = ({ children }: Props) => {
    return <NormalSection>{children}</NormalSection>
}

export default PageSection

