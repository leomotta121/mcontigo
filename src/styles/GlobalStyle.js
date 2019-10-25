import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #__next {
    height: 100%;
  }

  #__next {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  main {
    width: 100%;
    max-width: 1400px;
    margin: 60px auto auto auto;
    padding: 0 1em;
    flex: 1;

    @media only screen and (max-width: 515px) {
      margin: 90px auto auto auto;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
