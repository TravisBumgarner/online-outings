import React, { Component } from 'react'

import styled, { css } from 'styled-components'

const NormalWrapper = styled.div`
`

type Props = {
    children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
    return <NormalWrapper>{children}</NormalWrapper>
}

export default PageWrapper

