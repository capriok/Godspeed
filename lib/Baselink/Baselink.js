import React from 'react'
import styled from 'styled-components'
import '../globalstyle'

export const Base = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const Baselink = ({ className, to, text }) => (
  <Base className={className} href={to}>
    {text}
  </Base>
)

export default Baselink