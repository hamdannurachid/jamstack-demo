/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { ThemeProvider } from './themeContext'
import Footer from './Footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <ThemeProvider>
        <body className="leading-normal tracking-normal text-white gradient transition-all duration-300">
          <div className="bg-white-700 dark:bg-gray-900 text-gray-700 dark:text-gray-200 transition-all duration-300">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="pt-24"
              style={{
                margin: `0 auto`,
              }}>
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </body>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout