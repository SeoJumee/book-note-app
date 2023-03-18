import { createGlobalStyle } from 'styled-components';
import GaeguRegular from '../assets/font/Gaegu-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Gaegu';
    src: local('GaeguRegular'), local('GaeguRegular');
    src: url(${GaeguRegular}) format('truetype');
}
* {
    font-family: 'Gaegu';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`;
