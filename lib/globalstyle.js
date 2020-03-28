import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:300,400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');
  body, button{
    font-family: Montserrat;
  }
  h1{
    font-family: Alegreya Sans SC;
  }
  p{
    font-family: Roboto;
  }
`