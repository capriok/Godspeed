import React from "react";
import styled, { css } from "styled-components";
import '../globalstyle'

const bg = props => props.bg

const Base = styled.button`
  *{text-decoration:none; color:white;}
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
  background-color:${bg};
  transition:all .1s;
  :active{
    transition:all .1s;
    transform: scale(.95);
    background-color: lighten(${bg}, 20%);
  }
  ${props => props.shadow && css`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .5);
  `}
  ${props => props.disabled && css`
    opacity: .4;
  `}
`

const Button = ({ className, onClick, to, text, disabled, shadow, bg }) => (
  <Base className={className} onClick={onClick} href={to} text={text} disabled={disabled} shadow={shadow} bg={bg}>
    {to ? <a href={to} >{text}</a> : <p>{text}</p>}
  </Base >
)

export default Button

