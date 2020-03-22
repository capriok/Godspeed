import React from 'react'
import styled from 'styled-components'
import { Base } from '../Baselink/Baselink'
import '../globalstyle'

const Link = styled(Base)`
  height: 100%;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  text-align:center;
  font-size: 1.2rem;
  transition:all .1s;
  :not(:last-child){
    margin-right: 10px;
  }
  :active{
    transition:all .1s;
    transform: scale(.95);
    background-color: rgb(40, 40, 40);
  }
`

const Navlink = ({ className, to, text }) => (
  <Link className={className} href={to}>
    {text}
  </Link>
)

export default Navlink