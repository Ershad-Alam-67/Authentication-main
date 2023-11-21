import { Switch, Route } from "react-router-dom"

import Layout from "./components/Layout/Layout"
import UserProfile from "./components/Profile/UserProfile"
import AuthPage from "./pages/AuthPage"
import HomePage from "./pages/HomePage"
import ContextProvider from "./components/Context/ContextProvider"
import MyContext from "./components/Context/AuthContext"
import { useContext } from "react"

function App() {
  const context = useContext(MyContext)

  return (
    <ContextProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      </Layout>
    </ContextProvider>
  )
}

export default App
