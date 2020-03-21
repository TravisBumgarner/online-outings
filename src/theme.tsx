import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #fff;
        --foreground-color: #000;
        
    }

    html {
        background-color: var(--background-color);
        color: var(--foreground-color);
        font-size: 16px;
    }

`

export {
    GlobalStyle
}