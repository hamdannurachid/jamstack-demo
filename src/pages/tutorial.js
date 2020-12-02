// Gatsby supports TypeScript natively!
import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/Button';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <SEO title="Tutorial" />

    <div>
      <section id="hero" className="mt-4 py-36 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-12 text-center">Tutorial</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div className="card bg-gray-50 dark:bg-gray-800">
                <img src={'../../photo6170486373958658705.jpg'} alt="" className="w-full h-28 sm:h-48 object-cover" />

                <div className="m-4">
                  <Link to={node.fields.slug}>
                    <span className="font-bold text-lg">
                      {node.frontmatter.title} || {node.frontmatter.title}
                    </span>
                  </Link>

                  <p>
                    {node.excerpt}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <div className="flex justify-center">
            <p className="mt-8">
              <Button size="default">Lihat Semua</Button>
            </p>
          </div>
        </div>
      </section>
    </div>

  </Layout>

);





export const query = graphql`
 {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
          excerpt
        }
      }
    }
  }
  `;


