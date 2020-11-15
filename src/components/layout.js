import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import ChristmasCountdown from "./christmas_countdown"
import ProtectContent from "./protect_content"
import "./layout.css"

const Layout = ( props ) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const content =
    props.protect === "false" ? (
      <div>{props.children}</div>
    ) : (
      <ProtectContent>{props.children}</ProtectContent>
    )
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{content}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <ChristmasCountdown/>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
