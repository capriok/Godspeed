import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import './pages.scss'

import godspeedLogo from '../assets/logo-black.png'

import Install from '../components/mdx/index-install.mdx'
import Usage from '../components/mdx/index-usage.mdx'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="homepage">
        <div className="intro">
          <img className="logo" src={godspeedLogo} alt="" />
          <main>
            <header>Godspeed</header>
            <p>React Component / Toolkit library</p>
          </main>
        </div>
        <div className="get-started">
          <div className="installation">
            <h1>Installation</h1>
            <p>Install Godspeed's source files via npm.</p>
            <p style={{ paddingTop: 0 }}>We take care of the rest.</p>
            <Install />
            <footer>
              <Link to="installation"><p>See more about Installation</p></Link>
            </footer>
          </div>
          <div className="usage">
            <h1>Usage</h1>
            <Usage />
            <footer>
              <Link to="usage"><p>See more about Usage</p></Link>
            </footer>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage