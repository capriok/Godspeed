import React from "react";
import styled, { css } from "styled-components";
import '../globalstyle'

const bg = props => props.bg || 'rgb(17, 17, 17)'

const Div = styled.div`
  *{
    color:${props => props.color || "white"};
   text-align:center;
  }
  position: relative;
  width:fit-content;
  height:fit-content;
  border-radius: 5px;
  user-select:none;
  background-color: ${bg};
  box-shadow: 0px 0px 5px 0px rgba(17, 17, 17, .75);
  ${props => props.gap && css`
    margin-top: 5px;
    box-shadow: 0px 0px 5px 0px rgba(17, 17, 17, .75);
  `};
  ${props => props.color && css`
    *{color: props.color;}
  `}
  
`

const Hamburger = styled.h1`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.8rem;
  letter-spacing: 1px;
  transition:all .1s;
  :active{
    transition:all .05s;
    transform: scale(.95);
  }
`

const ItemWrapper = styled.div`
  position: absolute;
  border-radius: 5px;
  left: 50%;
  transform: translate(-50%);
  padding: 15px 0px;
  margin-top: -5px;
  background-color: ${bg};
    box-shadow: 0px 0px 5px 0px rgba(17, 17, 17, .75);
  ${props => props.gap && css`
    margin-top: 5px;
    box-shadow: 0px 0px 5px 0px rgba(17, 17, 17, .75);
  `};
`

const Menu = ({ className, children, onClick, text, bg, color, open, gap }) => (
  <Div className={className} bg={bg} color={color} open={open} >
    <Hamburger open={open} onClick={onClick}>{text}</Hamburger>
    <ItemWrapper bg={bg} gap={gap}>
      {open && children}
    </ItemWrapper>
  </Div >
)

export default Menu