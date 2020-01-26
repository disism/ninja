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
import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <section
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
        className="body-main"
      >
        <main>{children}</main>
          <footer style={{
            margin: `1rem 0 0 0`
          }}>
          disism.com © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </section>
    </>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
