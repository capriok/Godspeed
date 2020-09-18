import React from 'react'
import { Link } from "gatsby"
import { Drawer } from 'godspeed'
import useLockBodyScroll from './hooks/useLockBodyScroll'

import githubIcon from '../assets/github-icon.png'
import npmIcon from '../assets/npm-icon.png'

const SideDrawer = ({ drawer, setDrawer }) => {
  useLockBodyScroll()

  return (
    <Drawer
      open={drawer}
      bg="rgb(17, 17, 17)"
      color="white"
      padding="0px"
      onClick={() => setDrawer(false)}
    >
      <div className="drawer">
        <h1>Godspeed</h1>
        <Link to="/release-notes"><p>v1.4.35</p></Link>
        <div className="icons">
          <a href="https://github.com/capriok"
            target="_blank"
            rel="noopener noreferrer">
            <img className="github" src={githubIcon} alt="" />
          </a>
          <a href="https://www.npmjs.com/package/godspeed"
            target="_blank"
            rel="noopener noreferrer">
            <img className="npm" src={npmIcon} alt="" />
          </a>
        </div>
        <h1>Getting Started</h1>
        <Link to="/installation"><p>Installation</p></Link>
        <Link to="/usage"><p>Usage</p></Link>
        <h1>Components</h1>
        <Link to="/components/navbar"><p>Navbar</p></Link>
        <Link to="/components/card"><p>Card</p></Link>
        <Link to="/components/button"><p>Button</p></Link>
        <Link to="/components/input"><p>Input</p></Link>
        <Link to="/components/modal"><p>Modal</p></Link>
        <Link to="/components/drawer"><p>Drawer</p></Link>
      </div>
    </Drawer>
  )
}

export default SideDrawer
