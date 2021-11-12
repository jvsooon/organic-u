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
        /* font-size: clamp(2.488rem, 2.3470rem + 0.7050vw, 3.052rem);     */
        /* font-size: clamp(2.488rem, 2.0577rem + 2.1512vw, 4.209rem); */
    }

    header, section, footer {
        padding: 0 5%;
    }
`;

export default GlobalStyle;
