import { useState, useRef } from "react"

import classes from "./AuthForm.module.css"

const AuthForm = () => {
  const emailRef = useRef()
  const passRef = useRef()
  const [isLogin, setIsLogin] = useState(false)
  const [sendingRequest, setSendingRequest] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState)
    setSendingRequest(false)
  }
  const handleLoader = () => {
    setSendingRequest(true)
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const enteredEmail = emailRef.current.value
    const enteredPass = passRef.current.value
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
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
            <button onClick={handleLoader}>
              {isLogin && !sendingRequest ? "Login" : "Create Account"}
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
