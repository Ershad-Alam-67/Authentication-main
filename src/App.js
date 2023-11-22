import { Switch, Route } from "react-router-dom"

import Layout from "./components/Layout/Layout"
import UserProfile from "./components/Profile/UserProfile"
import AuthPage from "./pages/AuthPage"
import HomePage from "./pages/HomePage"

import MyContext from "./components/Context/AuthContext"
import { useContext } from "react"

function App() {
  const context = useContext(MyContext)

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          {!context.isLogIn && <AuthPage />}
          {context.isLogIn && <HomePage></HomePage>}
        </Route>
        <Route path="/profile">
          {context.isLogIn && <UserProfile />}
          {!context.isLogIn && <HomePage></HomePage>}
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
