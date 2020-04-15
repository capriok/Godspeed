import React from "react";
import styled, { css } from "styled-components";
import '../globalstyle'

const bg = props => props.bg || 'rgb(17, 17, 17)'
const size = props => {
  const xsm = '.9rem'
  const sm = '1rem'
  const md = '1.1rem'
  const lg = '1.25rem'

  if (props.size === 'xsm') {
    return xsm
  } else if (props.size === 'sm') {
    return sm
  } else if (props.size === 'md') {
    return md
  } else if (props.size === 'lg') {
    return lg
  } else { return sm }
}

const Base = styled.button`
  *{
    color: ${props => props.color || "white"};
    text-decoration: none; 
    font-size: ${size};
    font-weight: 500;
  }
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: ${bg};
  transition:all .1s;
  :active{
    transition:all .05s;
    transform: scale(.98);
  }
  ${props => props.size && css`
    *{font-size: ${size};}
  `}
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

const Button = ({ className, onClick, text, to, size, bg, color, clear, disabled, shadow }) => (
  <Base className={className} onClick={onClick} text={text} href={to} size={size}
    bg={bg} color={color} clear={clear} disabled={disabled} shadow={shadow}>
    {to ? <a href={to}>{text}</a> : <div>{text}</div>}
  </Base>
)

export default Button