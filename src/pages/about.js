import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout protect="false">
    <SEO title="About the naughty list game" />
    <h1>Naughty Elf Naughty List Game</h1>
    <p>This is a naughty list admin page for the elf on the shelf</p>
    <Link to="/">Give it a go!</Link>
    <p>
      © {new Date().getFullYear()}, Built with&nbsp;
      <a href="https://www.gatsbyjs.com">Gatsby</a>;
    </p>
  </Layout>
)

export default About
