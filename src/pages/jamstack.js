import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people jamstack Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptas reiciendis veritatis non minima distinctio et debitis id voluptatibus laboriosam ipsa cumque odit aliquid natus ad iste voluptatem, ab sapiente.</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>


   







    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default HomePage
