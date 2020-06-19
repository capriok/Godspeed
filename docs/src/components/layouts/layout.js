/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../layout.scss"
import Header from "../header"
import Footer from "../footer"
import Drawer from '../drawer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <div className="app">
        {drawer && <Drawer drawer={drawer} setDrawer={setDrawer} />}
        <Header siteTitle={data.site.siteMetadata.title} drawer={drawer} setDrawer={setDrawer} />
        <div className='root'>
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
