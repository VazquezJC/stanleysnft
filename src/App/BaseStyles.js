import { createGlobalStyle } from 'styled-components';
import { font, color } from 'shared/styles';

export default createGlobalStyle`
  html, body, #root {
    min-height: 100%;
    -webkit-overflow-scrolling: touch;
  }

  body {
    color: ${color.text['primary']};
    background: ${color.background['background']};
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;

    ${font.size(18)};
    ${font.regular};
  }

  img {
    height: fit-content;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    ${font.regular}
  }

  *, *:after, *:before, input[type="search"] {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
  }

  button {
    background: none;
    border: none;
  }

  /* Workaround for IE11 focus highlighting for select elements */
  select::-ms-value {
    background: none;
    color: #42413d;
  }

  [role="button"], button, input, select, textarea {
    outline: none;
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 1;
    }
  }

  [role="button"], button, input, textarea {
    appearance: none;
  }

  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  
  select::-ms-expand {
    display: none;
  }

  select option {
  }

  p {
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 1.4285;
  }

  textarea {
    line-height: 1.4285;
  }

  body, select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    touch-action: manipulation;
  }

  .order-enter {
    opacity: 0;
  }

  .order-enter-active {
    opacity: 1;
    transition: opacity 700ms ease-out;
  }

  .order-exit {
    opacity: 1;
  }

  .order-exit-active {
    opacity: 0;
    transition: opacity 700ms ease-out;
  }
`;
