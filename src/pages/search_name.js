import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Search_Page = props => {
  const [onNaughtyList, setOnNaughtyList] = useState(true)

  const name = props.location.state.name

  const toggleNaughtyList = () => {
    const naughtyListStatus = !onNaughtyList
    setOnNaughtyList(naughtyListStatus)
    var naughtyListObject = JSON.parse(window.localStorage.getItem("naughtyList"));
    if (naughtyListObject) naughtyListObject[name] = naughtyListStatus
    else {
      naughtyListObject = {}
      naughtyListObject[name] = naughtyListStatus
    }
    localStorage.setItem("naughtyList", JSON.stringify(naughtyListObject))
  }

  const toggleButton = () => {
    return (
      <button onClick={toggleNaughtyList}>
        {onNaughtyList ? `Remove ${name} from` : `Add ${name} to`} the naughty list
      </button>
    )
  }
  const naughtyListStatus = () => {
    if (onNaughtyList)
      return (
        <span>
          <p>{name} is on the naughty list</p>
          {toggleButton()}
        </span>
      )
    return (
      <span>
        <p>{name} is not on naughty list</p>
        {toggleButton()}
      </span>
    )
  }

  return (
    <Layout>
      <SEO title="Search page" />
      {naughtyListStatus()}
      <Link to="/">Search for another name</Link> <br />
    </Layout>
  )
}

export default Search_Page
