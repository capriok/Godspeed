import React from "react";
import styled, { css } from "styled-components";

const bg = (props: ButtonProps) => props.bg || 'rgb(17, 17, 17)'
const color = (props: ButtonProps) => props.color || 'white'
const clearColor = (props: ButtonProps) => props.color || 'black'
const size = (props: ButtonProps) => {
  if (props.size === 'xsm') {
    return '.9rem'
  } else if (props.size === 'sm') {
    return '1rem'
  } else if (props.size === 'md') {
    return '1.1rem'
  } else if (props.size === 'lg') {
    return '1.25rem'
  } else { return '.9rem' }
}
const hasBgProp = (props: ButtonProps): any => props.bg && css`
  background-color: ${bg};
`
const hasSizeProp = (props: ButtonProps): any => props.size && css`
  *{font-size: ${size};}
`
const hasClearProp = (props: ButtonProps): any => props.clear && css`
  *{color: ${clearColor}}
  background-color: transparent;
  border: 1px solid ${bg};
`
const hasShadowProp = (props: ButtonProps): any => props.shadow && css`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .75);
`
const hasDisabledProp = (props: ButtonProps): any => props.disabled && css`
  opacity: .2;
  pointer-events: none;
`

const Base = styled.button`
  *{
    color: ${color};
    font-size: ${size};
    font-weight: 500;
    text-decoration: none; 
  }
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  color: white;
  padding: 5px 12px;
  border-radius: 5px;
  background-color: ${bg};
  transition:all .1s;
  :active{
    transition:all .05s;
    transform: scale(.98);
  }
  ${hasSizeProp}
  ${hasBgProp}
  ${hasClearProp}
  ${hasShadowProp}
  ${hasDisabledProp}
`

const Button: React.FC<ButtonProps> = ({ className, type, name, onClick, form, text, to, size, bg, color, clear, disabled, shadow }) => (
  <Base className={className} type={type} name={name} onClick={onClick} form={form} text={text} to={to} size={size} bg={bg} color={color} clear={clear} disabled={disabled} shadow={shadow}>
    {to ? <a href={to}>{text}</a> : <div>{text}</div>}
  </Base>
)

export default Button