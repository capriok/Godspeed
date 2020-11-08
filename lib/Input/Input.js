import React from "react";
import styled, { css } from "styled-components";

const color = props => props.color || 'black'

const hasDisabledProp = props =>
  props.disabled && css`
  opacity: .4;
  pointer-events: none;
`
const hasUnderlinedProp = props =>
  props.underlined && css`
  background-color:transparent;
  border-bottom: 1px solid black;
  border-radius: 0px;
`
const hasShadowProp = props =>
  props.shadow && css`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .75);
`
const hasShadowWithUnderlinedProp = props =>
  (props.shadow && props.underlined) && css`
  box-shadow: 0px 4px 4px -3px rgba(0, 0, 0, .75);
`
const hasErrorWithoutUnderlinedProp = props =>
  (props.error && !props.underlined) && css`
  border: 1px solid red;
`
const hasErrorWithUnderlinedProp = props =>
  (props.error && props.underlined) && css`
  border-bottom: 1px solid red;
`

const Base = styled.input`
  color: ${color};
  border: none;
  outline: none;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  ${hasShadowProp}
  ${hasDisabledProp}
  ${hasUnderlinedProp}
  ${hasShadowWithUnderlinedProp}
  ${hasErrorWithoutUnderlinedProp}
  ${hasErrorWithUnderlinedProp}
`

const Input = ({
  className,
  type,
  name,
  min,
  max,
  step,
  onKeyPress,
  onKeyDown,
  onChange,
  checked,
  value,
  ref,
  placeholder,
  color,
  autoFocus,
  error,
  shadow,
  underlined,
  disabled
}) => (
    <Base
      className={className}
      type={type}
      name={name}
      min={min}
      max={max}
      step={step}
      onKeyPress={onKeyPress}
      onKeyDown={onKeyDown}
      onChange={onChange}
      checked={checked}
      value={value}
      ref={ref}
      placeholder={placeholder}
      color={color}
      autoFocus={autoFocus}
      error={error}
      shadow={shadow}
      underlined={underlined}
      disabled={disabled}
    />
  )

export default Input