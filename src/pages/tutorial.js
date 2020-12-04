// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tutorial = () => (
  <Layout>
    <SEO title="Tutorial" />

    <div>
      <section id="hero" className="mt-4 py-36 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-12 text-center">Tutorial Belajar</h2>
          <p>Welcome to page Tutorial Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ullam soluta id vitae nisi itaque tempora, quam quia velit omnis temporibus cumque? Quod, alias harum. Alias aliquam quas vel voluptatibus veniam aperiam nihil nostrum consectetur possimus explicabo, labore cupiditate, vero placeat qui error ullam quam soluta omnis corrupti? Tempora id, molestiae nostrum non molestias, nisi, quis doloremque enim commodi placeat soluta accusantium minus tempore magni cumque. Aut nulla, recusandae rerum voluptate veniam in sit soluta. Consequuntur necessitatibus voluptate perferendis nulla quas, soluta tenetur dolorum hic sint doloribus eveniet beatae ex aliquid quos deleniti distinctio debitis consectetur harum voluptates magni dolores?</p>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </section>
    </div>

  </Layout >
)

export default Tutorial
