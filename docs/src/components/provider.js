import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const MDX = ({ props, children }) => {
  return (
    <MDXProvider components={{
      ...props
    }}>
      {children}
    </MDXProvider>
  )
}

export default MDX