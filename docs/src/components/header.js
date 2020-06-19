import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, drawer, setDrawer }) => (
  <header className="header">
    <main>
      <Link to="/"><h1>{siteTitle}</h1></Link>
      <h1 className="ham" onClick={() => setDrawer(!drawer)}>≡</h1>
    </main>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
