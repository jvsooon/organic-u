import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        font-family: 'Montserrat', Sans-Serif;
        line-height: 1.6;
        overflow-x: hidden;    
    }

    button {
        font-family: 'Montserrat', Sans-Serif;
    }

    body, h1, h2, h3, h4, ul, p {
        margin: 0;
    }
    
    img {
        max-width: 100%;
        display: block;
    }
    
    h1 {
        font-size: clamp(2rem, 1.6175rem + 1.9127vw, 3.052rem);
    }

    h2 {
        font-size: clamp(1.5rem, 1.2212rem + 1.3941vw, 2.441rem);
    }

    header, main, footer {
        padding: 0 5%;
    }
`;

export default GlobalStyle;
