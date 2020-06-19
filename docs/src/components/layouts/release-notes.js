import React from 'react'
import MDX from '../provider'
import Layout from './layout'

const style = {
  title: {
    width: '100%',
    fontSize: '2rem',
    fontWeight: 600,
    padding: '50px 0px 20px 0px',
  },
  version: {
    width: '100%',
    fontSize: '1.2rem',
    fontWeight: 600,
    padding: '10px 0',
    marginTop: 25,
    borderTop: '1px solid black',
    borderBottom: '1px solid black'
  },
  date: {
    fontWeight: 600,
    fontSize: '1.1rem',
    padding: '20px 0 10px 0',
  },
  listHead: {
    fontSize: '1rem',
    fontWeight: 500,
    padding: '10px 0',
  },
  li: {
    listStyle: 'circle',
    textIndent: 20,
    padding: 5
  }
}

const props = {
  h1: props => <h1 style={style.title}  {...props} />,
  h2: props => <h2 style={style.version}  {...props} />,
  h3: props => <h3 style={style.date}  {...props} />,
  h4: props => <h4 style={style.listHead}  {...props} />,
  li: props => <li style={style.li}  {...props} />,
  p: props => <p style={style.par}  {...props} />,

}

const ReleaseNotes = ({ children }) => {

  return (
    <Layout>
      <div className="documentation">
        <MDX props={props} children={children} />
      </div>
    </Layout>
  )
}

export default ReleaseNotes