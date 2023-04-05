import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'montserrat', sans-serif;
        font-weight: 700;
        font-size: 1rem;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`

