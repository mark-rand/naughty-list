import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  signed_in: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_SIGNED_IN": {
      return {
        ...state,
        signed_in: true,
        user: action.user
      }
    }
    case "SET_SIGNED_OUT": {
      return {
        ...state,
        signed_in: false,
        user: undefined
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
