import React from 'react'
import styled from 'styled-components'

const color = props => props.color || 'inherit'
const hoverColor = props => props.hover || 'rgb(25, 25, 25)'

const Link = styled.div`
  *{color: ${color};}
  a{text-decoration:none;}
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
    background-color: ${hoverColor};
  }
  :not(:last-child){
    margin-right: 10px;
  }
  :active{
    transition:all .05s;
    transform: scale(.98);
  }
`

const NavLink = ({
  children,
  className,
  style,
  onClick,
  to,
  color,
  hover
}) => (
    <Link
      className={className}
      style={style}
      onClick={onClick}
      href={to}
      color={color}
      hover={hover}>
      {to ? <a href={to}>{children}</a> : <div>{children}</div>}
    </Link>
  )

export default NavLink