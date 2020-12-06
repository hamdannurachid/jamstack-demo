// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <div>
      <section id="hero" className="mt-4 py-36 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-12 text-center">Blog</h2>



<div className="grid md:grid-cols-4 gap-4">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div className="card bg-gray-50 dark:bg-gray-800">


              {node.frontmatter.thumbnailImage &&
                        <Img fixed={node.frontmatter.thumbnailImage.childImageSharp.fluid} className="w-full h-28 sm:h-48 object-cover" />
                    }

                <div className="m-4">
                 
 <Link to={node.fields.slug}>
 {node.frontmatter.title}
 </Link>
                  <p>
                    {node.excerpt}
                  </p>
                </div>
              </div>
            ))}

          </div> 











{/*
          <div className="grid md:grid-cols-3 gap-8 sm:px-0 px-4">
            <div className="card">
              <img src={'../../photo6170486373958658705.jpg'} alt="" className="w-full h-32 sm:h-40 object-cover" />
              <div className="m-4">
                <Link to="/blog">
                  <span className="font-bold text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga culpa quaerat dolorum.
                  </span>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad atque error, sapiente rem recusandae amet in totam necessitatibus sit itaque veniam laudantium est. Voluptate iste perferendis ratione provident aspernatur!
                </p>
              </div>
            </div>
            <div className="card">
              <img src={'../../photo6170486373958658705.jpg'} alt="" className="w-full h-32 sm:h-40  object-cover" />
              <div className="m-4">
                <Link to="/blog">
                  <span className="font-bold text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga culpa quaerat dolorum.
                  </span>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad atque error, sapiente rem recusandae amet in totam necessitatibus sit itaque veniam laudantium est. Voluptate iste perferendis ratione provident aspernatur!
                </p>
              </div>
            </div>
            <div className="card">
              <img src={'../../photo6170486373958658705.jpg'} alt="" className="w-full h-32 sm:h-40  object-cover" />
              <div className="m-4">
                <Link to="/blog">
                  <span className="font-bold text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga culpa quaerat dolorum.
                  </span>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad atque error, sapiente rem recusandae amet in totam necessitatibus sit itaque veniam laudantium est. Voluptate iste perferendis ratione provident aspernatur!
                </p>
              </div>
            </div>
            <div className="card">
              <img src={'../../photo6170486373958658705.jpg'} alt="" className="w-full h-32 sm:h-40  object-cover" />
              <div className="m-4">
                <Link to="/blog">
                  <span className="font-bold text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga culpa quaerat dolorum.
                  </span>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad atque error, sapiente rem recusandae amet in totam necessitatibus sit itaque veniam laudantium est. Voluptate iste perferendis ratione provident aspernatur!
                </p>
              </div>
            </div>
            <div className="card">
              <img src={'../../photo6170486373958658705.jpg'} alt="" className="w-full h-32 sm:h-40  object-cover" />
              <div className="m-4">
                <Link to="/blog">
                  <span className="font-bold text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga culpa quaerat dolorum.
                  </span>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad atque error, sapiente rem recusandae amet in totam necessitatibus sit itaque veniam laudantium est. Voluptate iste perferendis ratione provident aspernatur!
                </p>
              </div>
            </div>
          </div>

 */}





        </div>
      </section>
    </div>

  </Layout >
)


export const query = graphql`
 {
    allMarkdownRemark{
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

