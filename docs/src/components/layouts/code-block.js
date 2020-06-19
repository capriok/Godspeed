import React from 'react'
import MDX from '../provider'

const body = {
  width: '100%',
  margin: 0,
  display: 'flex',
  justifyContent: 'space-evenly',
  padding: '20px 0',
  borderRadius: 5,
  border: '1px solid black',
  backgroundColor: 'rgb(240, 240, 240)'
}

const props = {
  body: props => <body style={body} {...props} />
}

const CodeBlock = ({ children }) => {
  return <MDX props={props} children={children} />
}

export default CodeBlock