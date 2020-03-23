import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from 'polished'
import '../globalstyle'

const bg = props => props.bg || 'transparent'

const Base = styled.button`
  *{
    text-decoration:none; 
    color:white;
    font-size:1rem;
    font-weight:500;
    letter-spacing:1px;
  }
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
  background-color: ${bg};
  transition:all .1s;
  :hover{
    transition:all .1s;
    background-color: ${lighten('.05', 'rgb(17, 17, 17)')};
  }
  :active{
    transition:all .05s;
    transform: scale(.98);
  }
  ${props => !props.bg && css`
    *{color: black;}
    border 1px solid black;
    background-color: ${bg};
    :hover{
    transition:all .1s;
    border:1px solid ${darken('.2', 'black')};
    background-color: transparent};
  }
  `}
  ${props => props.shadow && css`
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .75);
  `}
  ${props => props.disabled && css`
    opacity: .4;
    pointer-events: none;
  `}
`

const Button = ({ className, onClick, text, to, bg, disabled, shadow }) => (
  <Base className={className} onClick={onClick} text={text} href={to} bg={bg} disabled={disabled} shadow={shadow}>
    {to ? <a href={to} >{text}</a> : <p>{text}</p>}
  </Base>
)

export default Button