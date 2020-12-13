import React from 'react'
import styled from 'styled-components'

const color = (props: CardProps) => props.color || 'black'
const padding = (props: CardProps) => props.padding || '10px'
const borderRadius = (props: CardProps) => props.radius || '5px'
const border = (props: CardProps) => props.borderBg || 'black'
const bg = (props: CardProps) => props.bg || 'white'

const Base = styled.div`
  color:${color};
  width: fit-content;
  height: fit-content;
  padding:  ${padding};
  border-radius: ${borderRadius};
  border: 1px solid ${border};
  background-color: ${bg};
  box-shadow: 0px 0px 15px -5px rgb(0,0,0,.75);
`

export const Card: React.FC<CardProps> = ({ className, onClick, children, bg, color, borderBg, padding, radius }) => (
  <Base className={className} onClick={onClick} bg={bg} color={color} borderBg={borderBg} padding={padding} radius={radius}>
    {children}
  </Base>
)

export default Card