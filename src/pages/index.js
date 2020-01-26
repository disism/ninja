import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link, useStaticQuery, graphql } from "gatsby"

 const IndexPage = ({ data }) => {
  
  const siteMetaData = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          description
        }
      },
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)


  return (

    <Layout>
      <SEO title="HOME" />
      <p className="message">{siteMetaData.site.siteMetadata.description}， 包含学习资源， 并提供 <a href="https://github.com/disism/kuroshiro-client">开放源代码的假名转换</a> 服务。</p>
      <p>该网站共有 {data.allMarkdownRemark.totalCount} 篇文章</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <section key={node.id} className="link-style">
          <Link to={node.fields.slug}>
            <h1>{node.frontmatter.title}</h1>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </Link>
        </section>
      ))}
    </Layout>
  )
}
export default IndexPage
