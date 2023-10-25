import { createContext } from "react"

export const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const appName = "MovieApp"

  return (
    <AppContext.Provider value={{ appName }}>{children}</AppContext.Provider>
  )
}
