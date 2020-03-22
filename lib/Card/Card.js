import React from 'react'
import styled from 'styled-components'
import '../globalstyle'

const Div = styled.div`
  padding:  ${props => props.padding || '10px'};
  color:${props => props.color || 'black'};
  width: fit-content;
  height: fit-content;
  border-radius:  ${props => props.radius || '5px'};
  background-color: ${props => props.bg || 'white'};
  border: 1px solid ${props => props.borderBg || 'black'};
  box-shadow: 0px 0px 15px -5px rgb(0,0,0,.75);
`

const Card = ({ className, onHover, onClick, children, bg, color, borderBg, padding, radius }) => (
  <Div className={className} onHover={onHover} onClick={onClick}
    bg={bg} color={color} borderBg={borderBg} padding={padding} radius={radius}>
    {children}
  </Div>
)

export default Card