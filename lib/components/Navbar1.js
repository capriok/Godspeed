import React from 'react'

const classes = {
  nav1: {
    width: '100vw',
    height: '55px',
    backgroundColor: 'rgb(17, 17, 17)'
  },
  buttons: {
    padding: '30px, 10px',
    borderRadius: '5px',
    backgroundColor: 'rgb(17, 17, 17)'
  }
}

const Navbar1 = () => (

  <div className={classes.nav1}>
    <nav>
      <h1></h1>
      <div className={classes.buttons}>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </nav>
  </div>
)

export default Navbar1