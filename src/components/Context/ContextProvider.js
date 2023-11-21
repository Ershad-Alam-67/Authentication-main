import { useContext, useState } from "react"
import MyContext from "./AuthContext"

const ContextProvider = ({ children }) => {
  const [token, setToken] = useState("")
  const [isLogIn, setIsLogIn] = useState(false)
  const contextValue = {
    token: token,
    setToken: setToken,
    isLogIn: isLogIn,
    setIsLogIn: setIsLogIn,
  }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}
export default ContextProvider
