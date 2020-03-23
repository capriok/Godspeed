import React from "react";
import styled, { css } from "styled-components";
import MenuItem from "../MenuItem/MenuItem";
import '../globalstyle'

const Div = styled.div`
  *{color:white; text-align:center;}
  width:fit-content;
  height:fit-content;
  border-radius: 5px;
  background-color: rgb(17, 17, 17);
  ${props => props.open && css`
    padding-bottom: 10px;
  `}
`

const Hamburger = styled.h1`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.8rem;
  letter-spacing: 1px;
  ${props => props.open && css`
    padding-bottom: 0px;
  `}
`

const Menu = ({ children, onClick, open, text }) => (
  <Div open={open}>
    <Hamburger open={open} onClick={onClick}>{text}</Hamburger>
    {open && children}
  </Div>
)

export default Menu
