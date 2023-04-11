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

    a {
        text-decoration: none;
        color: #F1ECE1;
    }

    body, input, textarea, button {
        font-family: 'montserrat', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
    }
`

