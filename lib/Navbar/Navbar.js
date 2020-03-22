import React from 'react'
import styled, { css } from 'styled-components'
import '../globalstyle'

const Nav = styled.nav`
  *{color: white;}
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  max-height: 55px;
  padding: 0px 20px;
  user-select: none;
  z-index: 1000;
  background-color:rgb(17, 17, 17);
  ${props => props.shadow && css`
    box-shadow: 0px 3px 15px -5px black;
  `}
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 1px;
`

const Buttons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height:100%;
`

const Navbar = (props) => (

  <Nav shadow={props.shadow} >
    <Title>{props.title}</Title>
    <Buttons>
      {props.children}
    </Buttons>
  </Nav >
)

export default Navbar