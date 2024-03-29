import React from "react"
import { Link } from "gatsby"

import Layout from "../Layout/layout"
import SEO from "../components/shared/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
