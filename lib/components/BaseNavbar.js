import React from 'react'
import styled, { css } from 'styled-components'
import '../globalstyle'

const Navbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  max-height: 55px;
  padding: 0px 20px;
  user-select: none;
  z-index: 1000;
  color: white;
  background-color:rgb(17, 17, 17);
  ${props => props.boxShadow && css`
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
`

const Link = styled.div`
  cursor:pointer;
  height:100%;
  text-align:center;
  font-size: 1.2rem;
  :not(:last-child){
    margin-right: 15px;
  }
`

const To = styled.a`
  text-decoration: none;
  color:white;
`

const BaseNavbar = (props) => (
  <Navbar boxShadow={props.boxShadow}>
    <Title>{props.title}</Title>
    <Buttons>
      {props.buttons.map(button => <Link href={button.href}><To href={button.href}>{button.name}</To></Link>)}
    </Buttons>
  </Navbar>
)

export default BaseNavbar