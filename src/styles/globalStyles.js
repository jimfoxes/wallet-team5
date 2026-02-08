import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  #root {
    text-align: center;
    margin: 0 auto;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      letter-spacing: 0px;
      /* color: #000000; */
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
    color: #000000;
    &:hover {
      color: #1fa46c;
    }
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: Montserrat;
    background-color: #f4f5f6;
    @media (max-width: 768px) {
      background: rgba(255, 255, 255, 1);
    }
  }

  .rdp-root {
    padding: 2px 5px 5px 5px;
    .rdp-month_caption{
      padding: 0 10px;
    }

    --rdp-accent-color: #1fa46c;
    --rdp-day-height: 36px;
    --rdp-day-width: 36px;
    --rdp-day_button-height: 35px;
    --rdp-day_button-width: 35px;
    --rdp-disabled-opacity: 0.3;
  }

  input, button {
    font-family: Montserrat;
  }
`

export default GlobalStyle
