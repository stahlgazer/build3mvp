import React from 'react'
import LoginForm from './Form/LoginForm'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  registerBox: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const Login = () => {
  const classes = useStyles();
  return (
<<<<<<< Updated upstream
    <div className={classes.root}>
        <div className={classes.registerBox}>
          <LoginForm />
        </div>
    </div>
  )
}
=======
    <form className="gavforms" onSubmit={handleSubmit} name="login">
      <h3>Log In For Full Access</h3>
      <label className="gavlabels" htmlFor="username">
        Username:{" "}
      </label>
      <input
        className="gavinputs"
        required
        type="text"
        name="username"
        placeholder="JohnSmith"
        value={userData.username}
        onChange={handleChange}
      />
>>>>>>> Stashed changes

export default Login
