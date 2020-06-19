import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="four-oh-four">
      <SEO title="Page not found" />
      <h1>NOT FOUND</h1>
      <p>This page does not exist.</p>
    </div>
  </Layout>
)

export default NotFoundPage