import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import '../globalstyle'

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  padding: 0px 10px;
  text-align:center;
  font-size: 1.2rem;
  transition:all .1s;
  :hover{
    transition:all .1s;
    background-color: ${lighten('.05', 'rgb(17, 17, 17)')};
  }
  :not(:last-child){
    margin-right: 10px;
  }
  :active{
    transition:all .05s;
    transform: scale(.95);
    background-color: rgb(40, 40, 40);
  }
`

const NavLink = ({ className, to, text }) => (
  <Link className={className} href={to}>
    {text}
  </Link>
)

export default NavLink