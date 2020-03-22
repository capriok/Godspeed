import React from 'react'
import styled, { css } from 'styled-components'
import '../globalstyle'

const height = props => props.height || '55px'

const Nav = styled.nav`
  *{color: white;}
  display: flex;
  align-items: center;
  width: 100%;
  height: ${height};
  min-width: 300px;
  padding: 0px 20px;
  user-select: none;
  overflow: hidden;
  z-index: 1000;
  background-color:rgb(17, 17, 17);
  ${props => props.shadow && css`
    box-shadow: 0px 3px 15px -5px black;
  `}
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 1px;
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

const Navbar = ({ children, className, title, logo, height, shadow, inv }) => (
  <Nav className={className} height={height} shadow={shadow} >
    <Items inv={inv}>
      <Title>{title}</Title>
      {logo && <Logo><Img src={logo} /></Logo>}
      <Links>{children}</Links>
    </Items>
  </Nav >
)

export default Navbar