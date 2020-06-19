import React, { useState, useEffect } from 'react'
import Layout from './layout'
import MDX from '../provider'
import '../layout.scss'

const Documentation = ({ children }) => {
  const [isMobile, conclusion] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 800
    conclusion(isMobile)
  }, [])

  const style = {
    wordWrap: 'wrap',
    width: '100%',
    title: {
      fontSize: '2rem',
      fontWeight: 600,
      paddingTop: 40,
      paddingBottom: 10,
    },
    subTitle: {
      fontSize: '1.2rem',
      paddingTop: 10,
      fontWeight: 500
    },
    par: {
      paddingTop: 10
    },
    listHead: {
      fontSize: '1.05rem',
      fontWeight: 600,
      padding: '10px 0'
    },
    li: {
      listStyle: 'circle',
      textIndent: 20
    },
    main: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '20px 0',
      margin: '20px 0 20px 0',
      borderRadius: 5,
      border: '1px solid black',
      backgroundColor: 'rgb(240, 240, 240)'
    },
    mainMobile: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: '20px 0',
      margin: '20px 0 20px 0',
      borderRadius: 5,
      border: '1px solid black',
      backgroundColor: 'rgb(240, 240, 240)'
    },
    section: {},
    sectionMobile: { margin: '10px 0' },
  }

  const props = {
    h1: props => <h1 style={style.title}  {...props} />,
    h2: props => <h2 style={style.subTitle}  {...props} />,
    h3: props => <h3 style={style.listHead}  {...props} />,
    li: props => <li style={style.li}  {...props} />,
    p: props => <p style={style.par}  {...props} />,
    main: props => <main style={!isMobile ? style.main : style.mainMobile} {...props} />,
    section: props => <section style={!isMobile ? style.section : style.sectionMobile} {...props} />
  }

  return (
    <Layout>
      <div className="documentation">
        <MDX props={props} children={children} />
      </div>
    </Layout>
  )
}

export default Documentation