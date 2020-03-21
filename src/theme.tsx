import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #000;
        --foreground-color: #0089ff;
        --accent-color: #fff;
    }

    html {
        font-family: 'typeface-roboto';
        background-color: var(--background-color);
        color: var(--foreground-color);
        font-size: 16px;
    }

    a {
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }

        &:visited {
            color: var(--foreground-color);
        }
    }

`

export {
    GlobalStyle
}