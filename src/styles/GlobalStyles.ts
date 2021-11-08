import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body{
    font-family:${props => props.theme.fontFamilies.default}, sans-serif;
    color: ${props => props.theme.neutralColor['700']};
    background-color: ${props => props.theme.neutralColor['100']};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontFamilies.highlight}, sans-serif;
    color: ${props => props.theme.neutralColor['900']};
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 ${props => props.theme.fontSizes.md} ${props =>
  props.theme.fontFamilies.default}, sans-serif;
  }

  button {
    cursor: pointer;
    outline: none;
  }

`
