import classes from "./ProfileForm.module.css"
import MyContext from "../Context/AuthContext"
import { useContext, useRef } from "react"

const ProfileForm = () => {
  const passRef = useRef()

  const context = useContext(MyContext)
  console.log(context)
  const changePassword = () => {
    const newPass = passRef.current.value
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBu9XdkuYIsztfXH0mRtYQn08aiWInvtqI",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: context.token,
          password: newPass,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((data) => {
        console.log(data)
      })
  }
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" ref={passRef} id="new-password" />
      </div>
      <div className={classes.action}>
        <button onClick={changePassword}>Change Password</button>
      </div>
    </form>
  )
}

export default ProfileForm
