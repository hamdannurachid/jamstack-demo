// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <SEO title="Tutorial" />

    <div>
      <section id="hero" className="mt-4 py-36 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-12 text-center">Tutorial</h2>



 <div id="card" className="">
            <div className="container justify-center items-center mx-auto flex flex-col">



 {data.allMarkdownRemark.edges.map(({ node }) => (
              <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 sm:w-3/5 w-11/12 mx-2">
                <div className="h-48 w-auto md:w-1/2">

                 {node.frontmatter.thumbnailImage &&
                        <Img fixed={node.frontmatter.thumbnailImage.childImageSharp.fluid} className="inset-0 h-full w-full object-cover object-center" />
                    }

                </div>
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <p className="text-sm text-gray-500 flex items-center">
                    <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Bagian 1
                    </p>
    <Link to={node.fields.slug}>
                  <h3 className="font-semibold text-lg leading-tight truncate">
                
 {node.frontmatter.title}

                  </h3>
                   </Link>
                  <p className="mt-2">
                    {node.excerpt}
                  </p>
                  <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                    hamdan &bull; 5 - 12-2020
                  </p>
                </div>
              </div>
))}








            </div>





          </div>





        </div>
      </section>
    </div>

  </Layout >
)


export const query = graphql`
 {
    allMarkdownRemark (filter: {frontmatter: {key: {eq: "tutorial"}}}){
      edges {
        node {
          fields{
            slug
          }
          frontmatter {
            date
            title 
            thumbnailImage {
            id
            childImageSharp {
                     fluid {
      ...GatsbyImageSharpFluid_tracedSVG
    }
                  }
          }
          }
          excerpt
        }
      }
    }
  }
  `;

