import classes from "./MainNavigation.module.css"

import { Link } from "react-router-dom"
import MyContext from "../Context/AuthContext"
import { useContext } from "react"

const MainNavigation = () => {
  const context = useContext(MyContext)
  console.log(context)
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!context.isLogIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {context.isLogIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {context.isLogIn && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
