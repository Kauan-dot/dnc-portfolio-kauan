import { createGlobalStyle } from 'styled-components'
import type { DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
        background-color: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        scroll-behavior: smooth;
    }

    h1, h2, p, ul, li {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`
