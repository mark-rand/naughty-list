import React, { useContext } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const SignInButton = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const button = (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "SET_SIGNED_IN" })
        }}
      >
        Sign in
      </button>
    </div>
  )

  if (state.signed_in) {
    return (
      <div>
        Signed in as {state.user}
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "SET_SIGNED_OUT" })
          }}
        >
          Sign out
        </button>
      </div>
    )
  }
  return button
}

export default SignInButton
