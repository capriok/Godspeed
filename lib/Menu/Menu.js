import React from "react";
import styled, { css } from "styled-components";
import MenuItem from "../MenuItem/MenuItem";
import '../globalstyle'

const gap = '5px'

const Div = styled.div`
  *{color:white; text-align:center;}
  position: relative;
  width:fit-content;
  height:fit-content;
  border-radius: 5px;
  user-select:none;
  background-color: rgb(17, 17, 17);
`

const Hamburger = styled.h1`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.8rem;
  letter-spacing: 1px;
`

const ItemWrapper = styled.div`
  position: absolute;
  border-radius: 5px;
  left: 50%;
  transform: translate(-50%);
  padding: 15px 0px;
  margin-top: -10px;
  background-color: rgb(17,17,17);
  ${props => props.gap && css`
    margin-top: 5px;
  `};
`

const Menu = ({ children, onClick, open, text, gap }) => (
  <Div open={open}>
    <Hamburger open={open} onClick={onClick}>{text}</Hamburger>
    <ItemWrapper gap={gap}>
      {open && children}
    </ItemWrapper>
  </Div>
)

export default Menu