import React, { useContext, useState } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"
import SHA256 from "../utils/SHA256"

const ProtectContent = ({ children }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    if (
      SHA256(event.target.username.value.toLowerCase()) ===
      "b6dc9083da372fed2119ace11ae9ba8713f7e30827e854371eb5d2335aec664b"
    ) {
      if (
        SHA256(event.target.password.value.toLowerCase()) ===
        "937e8d5fbb48bd4949536cd65b8d35c426b80d2f830c5c308e2cdec422ae2244"
      ) {
        dispatch({
          type: "SET_SIGNED_IN",
          user: event.target.username.value.toLowerCase(),
        })
        return false
      }
    }
    setErrorMessage("Invalid login - the chief elf has been notified!")
  }

  const displayErrorMessage =
    errorMessage != "" ? <div>{errorMessage}</div> : null

  if (!state.signed_in) {
    return (
      <>
        <form onSubmit={handleSubmit} action="#">
          <label>
            <input placeholder="Username" name="username" type="text" />
          </label>
          <label>
            <input placeholder="Password" name="password" type="password" />
          </label>
          <input className="submit" type="submit" value="Login" />
        </form>
        {displayErrorMessage}
      </>
    )
  }
  return <div>{children}</div>
}

export default ProtectContent
