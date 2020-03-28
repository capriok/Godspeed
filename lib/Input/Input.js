import React from "react";
import styled, { css } from "styled-components";
import '../globalstyle'

const Base = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  color: ${ props => props.color || 'black'};
  ${props => props.shadow && css`
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .75);
  `}
  ${props => props.underlined && css`
    background-color:transparent;
    border-bottom: 1px solid black;
    border-radius: 0px;
  `}
  ${props => props.disabled && css`
    opacity: .4;
    pointer-events: none;
  `}
  ${props => (props.error && !props.underlined) && css`
    border: 1px solid red;
  `}
  ${props => (props.error && props.underlined) && css`
    border-bottom: 1px solid red;
  `}
`

const Button = ({ className, type, onChange, value, placeholder, color, autoFocus, error, shadow, underlined, disabled }) => (
  <Base className={className} type={type} onChange={onChange} value={value} placeholder={placeholder} color={color} autoFocus={autoFocus} error={error} shadow={shadow} underlined={underlined} disabled={disabled} />
)

export default Button