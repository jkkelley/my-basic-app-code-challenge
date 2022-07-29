import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
    body {
        -webkit-font-smoothing: antialiased;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
`;

export default FontStyles;
