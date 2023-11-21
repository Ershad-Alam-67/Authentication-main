import classes from "./AuthForm.module.css"
import { useState, useRef, useContext } from "react"
import { useHistory } from "react-router-dom"
import MyContext from "../Context/AuthContext"

const AuthForm = () => {
  const context = useContext(MyContext)

  const history = useHistory()
  const emailRef = useRef()
  const passRef = useRef()
  const [isLogin, setIsLogin] = useState(false)
  const [sendingRequest, setSendingRequest] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState)
    setSendingRequest(false)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setSendingRequest(true)

    const enteredEmail = emailRef.current.value
    const enteredPass = passRef.current.value
    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBu9XdkuYIsztfXH0mRtYQn08aiWInvtqI",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPass,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            history.push("/")
            context.setIsLogIn(true)
            return res.json()
          } else {
            return res.json().then((data) => {
              alert(data.error.message)
            })
          }
        })
        .then((data) => {
          console.log("hii")
          setSendingRequest(false)
          console.log(data.idToken)
        })
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBu9XdkuYIsztfXH0mRtYQn08aiWInvtqI",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPass,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            history.push("/")
            return res.json()
          } else {
            return res.json().then((data) => {
              alert(data.error.message)
            })
          }
        })
        .then(() => {
          setSendingRequest(false)
        })
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passRef} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          {sendingRequest ? (
            <h1>Sending Request...</h1>
          ) : (
            <button onClick={submitHandler}>
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  )
}

export default AuthForm
