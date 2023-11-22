import { useContext, useState, useEffect } from "react"
import MyContext from "./AuthContext"

const ContextProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("User")) || {}
  const [token, setToken] = useState(storedUser.token || "")
  const [isLogIn, setIsLogIn] = useState(storedUser.isLogIn || false)

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify({ token, isLogIn }))
  }, [token, isLogIn])

  const contextValue = {
    token,
    setToken,
    isLogIn,
    setIsLogIn,
  }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

export default ContextProvider
