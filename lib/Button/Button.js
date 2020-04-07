import React from "react";
import styled, { css } from "styled-components";
import '../globalstyle'

const bg = props => props.bg || 'rgb(17, 17, 17)'

const Base = styled.button`
  *{
    color:${props => props.color || "white"};
    text-decoration:none; 
    font-size:1rem;
    font-weight:500;
  }
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  color: white;
  padding: 7px 17px;
  border-radius: 5px;
  background-color: ${bg};
  transition:all .1s;
  :active{
    transition:all .05s;
    transform: scale(.98);
  }
  ${props => props.bg && css`
    background-color: ${bg};
  `}
  ${props => props.clear && css`
    *{color: ${props.color || "black"};}
    background-color: transparent;
    border: 1px solid ${bg};
  `}
  ${props => props.shadow && css`
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .75);
  `}
  ${props => props.disabled && css`
    opacity: .2;
    pointer-events: none;
  `}
`

const Button = ({ className, onClick, text, to, bg, color, clear, disabled, shadow }) => (
  <Base className={className} onClick={onClick} text={text} href={to}
    bg={bg} color={color} clear={clear} disabled={disabled} shadow={shadow}>
    {to ? <a href={to}>{text}</a> : <p>{text}</p>}
  </Base>
)

export default Button