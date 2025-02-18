import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        
    body {
        background-color: #E6DEDE;
        font-family: 'Segoe UI', serif;
        color: #5E5E5E;
    }
`;

export default GlobalStyles;