import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.fonsPrimary.textSection};
        background-color: ${theme.colors.testBgc};
        min-width: 360px;
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
    section {
        padding: 100px 0;

        @media ${theme.media.mobile} {
           padding: 80px;
        }
    }
`