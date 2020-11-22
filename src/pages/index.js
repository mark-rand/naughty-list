import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function sanitizeString(str) {
  const camelized = str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
    return word.toUpperCase()
  }).replace(/(\s+)/g,' ')
  return camelized.replace(/(^\s+|\s+$)/g, '')
}

const IndexPage = () => {
  const checkName = event => {
    event.preventDefault()
    const name = sanitizeString(event.target.naughtyName.value)
    navigate("search_name", { state: { name: name } })
  }

  return (
    <Layout>
      <SEO title="Naughty List Admin" />
      <h1>Search the Naughty List</h1>
      <form onSubmit={checkName}>
        <input name="naughtyName" placeholder="Enter name to check"></input>
        <button>Check</button>
      </form>
    </Layout>
  )
}

export default IndexPage
