import React from 'react'
import styled, { css } from 'styled-components'
import '../globalstyle'

const Div = styled.div`
  padding:  ${props => props.padding || '10px'};
  width: fit-content;
  border-radius:  ${props => props.radius || '5px'};
  background-color: ${props => props.bg || 'white'};
  border: 1px solid ${props => props.borderBg || 'black'};
  box-shadow: 0px 10px 15px -5px rgb(0,0,0,.75);
`

const Card = ({ children, bg, borderBg, padding, radius }) => (
  <Div bg={bg} borderBg={borderBg} padding={padding} radius={radius}>
    {children}
  </Div>
)

export default Card