import { useContext, useState, useEffect } from "react"
import MyContext from "./AuthContext"

const ContextProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("User")) || {}
  const [token, setToken] = useState(storedUser.token || "")
  const [isLogIn, setIsLogIn] = useState(storedUser.isLogIn || false)

  const handleLogout = () => {
    localStorage.removeItem("User")
    setToken("")
    setIsLogIn(false)
  }

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify({ token, isLogIn }))
  }, [token, isLogIn])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleLogout()
      alert("Your session has expired. Please log in again.")
    }, 5 * 60 * 1000)

    return () => clearTimeout(timeoutId)
  }, [token])

  const contextValue = {
    token,
    setToken,
    isLogIn,
    setIsLogIn,
    handleLogout,
  }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

export default ContextProvider
