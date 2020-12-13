import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const height = (props: NavbarProps) => props.height || '55px'
const bg = (props: NavbarProps) => props.bg || 'rgb(17, 17, 17)'
const color = (props: NavbarProps) => props.color || 'white'
const titleFont = (props: NavbarProps) => props.titleFont || 'Alegreya Sans SC'
const src = (props: NavbarProps): any => props.src

const hasShadowProp = (props: NavbarProps): any => props.shadow && css`
  box-shadow: 0px 3px 15px -5px black;
`
const hasInvProp = (props: NavbarProps): any => props.inv && css`
  flex-direction: row-reverse;
`

const Nav = styled.nav`
  *{color: ${color};}
  box-sizing: border-box;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${height};
  min-width: 300px;
  padding: 0px 20px;
  user-select: none;
  z-index: 9900;
  background-color: ${bg};
  ${hasShadowProp}
`

const Title = styled.div`
  *{
    text-decoration:none;
    font-size: 1.8rem;
    font-family: ${titleFont};
    font-weight: 300;
    letter-spacing: 1px;
  }
`

const Items = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:100%;
  position: relative;
  ${hasInvProp};
`

const Links = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height:100%;
`

const Logo = styled.div`
  position: absolute;
  left:50%;
  transform:translate(-50%);
  display: flex;
  align-items: center;
  height: 100%;
  max-height: ${height};
`

const Img = styled.img`
  src: url(${src});
  max-height: 45px;
`

const Navbar: React.FC<NavbarProps> = ({ children, className, style, height, title, titleFont, to, bg, color, logo, shadow, inv }) => (
  <Nav className={className} style={style} bg={bg} color={color} height={height} shadow={shadow}>
    <Items inv={inv}>
      <Title titleFont={titleFont}>
        {to ? <Link to={to}>{title}</Link> : <h1>{title}</h1>}
      </Title>
      {logo && <Logo><Img src={logo} /></Logo>}
      <Links>{children}</Links>
    </Items>
  </Nav>
)

export default Navbar