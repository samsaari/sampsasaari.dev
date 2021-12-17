import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  :root {
    font-family: "Work Sans", sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    font-weight: 400;
  }

  body {
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(31, 31, 71);
  }

  /* Headings. */

  h1 {
    font-size: 3.125rem;
    font-weight: 600;
    color: #fff;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
  }
  `