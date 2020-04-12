import React from 'react'
import styled, { css } from 'styled-components'
import '../globalstyle'

const height = props => props.height || '55px'
const bg = props => props.bg || 'rgb(17, 17, 17)'
const color = props => props.color || 'white'
const titleWeight = props => props.titleWeight || '300'
const titleFont = props => props.titleFont || 'Alegreya Sans SC'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  box-sizing: border-box;
  *{color: ${color};}
  display: flex;
  align-items: center;
  width: 100%;
  height: ${height};
  min-width: 300px;
  padding: 0px 20px;
  user-select: none;
  z-index: 1000;

  background-color: ${bg};
  ${props => props.shadow && css`
    box-shadow: 0px 3px 15px -5px black;
  `}
`

const Title = styled.div`
  *{
    text-decoration:none;
    font-size: 1.8rem;
    font-family: ${titleFont};
    font-weight: ${titleWeight};
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
  ${props => props.inv && css`
    flex-direction: row-reverse;
  `};
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
  src: url(${props => props.src});
  max-height: 45px;
`

const Navbar = ({ children, className, style, title, titleFont, titleWeight, to, bg, color, logo, height, shadow, inv }) => (
  <Nav className={className} style={style} bg={bg} color={color} height={height} shadow={shadow} >
    <Items inv={inv}>
      <Title titleFont={titleFont} titleWeight={titleWeight}>{to ? <a href={to} titleWeight={titleWeight}>{title}</a> : <h1 >{title}</h1>}</Title>
      {logo && <Logo><Img src={logo} /></Logo>}
      <Links>{children}</Links>
    </Items>
  </Nav >
)

export default Navbar