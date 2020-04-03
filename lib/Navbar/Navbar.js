import React from 'react'
import styled, { css } from 'styled-components'
import '../globalstyle'

const height = props => props.height || '55px'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  box-sizing: border-box;
  *{color: white;}
  display: flex;
  align-items: center;
  width: 100%;
  height: ${height};
  min-width: 300px;
  padding: 0px 20px;
  user-select: none;
  z-index: 1000;
  background-color:rgb(17, 17, 17);
  ${props => props.shadow && css`
    box-shadow: 0px 3px 15px -5px black;
  `}
`

const Title = styled.div`
  *{
    text-decoration:none;
    font-size: 1.8rem;
    font-family: Alegreya Sans SC;
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

const Navbar = ({ children, className, style, title, to, logo, height, shadow, inv }) => (
  <Nav className={className} style={style} height={height} shadow={shadow} >
    <Items inv={inv}>
      <Title>{to ? <a href={to}>{title}</a> : <h1>{title}</h1>}</Title>
      {logo && <Logo><Img src={logo} /></Logo>}
      <Links>{children}</Links>
    </Items>
  </Nav >
)

export default Navbar