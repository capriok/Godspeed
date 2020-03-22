import React from 'react'
import styled, { css } from 'styled-components'
import '../globalstyle'

const Link = styled.a`
text-decoration: none;
height: 100%;
display: flex;
align-items: center;
cursor:pointer;
text-align:center;
font-size: 1.2rem;
:not(:last-child){
  margin-right: 15px;
}
`

const NavLink = props => (
  <Link href={props.to}>
    {props.text}
  </Link>
)

export default NavLink