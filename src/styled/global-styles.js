import { createGlobalStyle } from 'styled-components'
import '../css/typography.css'

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  :root {
    --yellow: #ffc600;
    --dark: rgb(17, 17, 17);
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  html {
    font-family: "Gotham-Black", sans-serif;
    font-weight: 400;
  }

  body {
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--dark)
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

  ::selection {
    background: var(--yellow);
    color: #000;
  }

  .fade-in {
    transition: opacity 0.5s ease;
  }

  .fade-out {
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .Typist .Cursor {
    display: inline-block;
    color: var(--yellow);
  }
  
  .Typist .Cursor--blinking {
    opacity: 1;
    animation: blink 1s linear infinite; 
  }
  
  @keyframes blink {
    0% {
      opacity: 1; }
    50% {
      opacity: 0; }
    100% {
      opacity: 1; } }
  `
  export default GlobalStyles;