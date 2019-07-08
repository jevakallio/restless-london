/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet';
import Header from "./header"
import { breakpoints } from '../theme';
import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Roboto+Mono:400,700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: breakpoints.wide,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: `3rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
