import React from 'react';
import './SignUp.css'
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom"
import firebase from 'firebase/app'
import 'firebase/auth'

function SignUp(props) {
  const history = useHistory()
  return (
    <div className="signup-container">
      <h1 className="app-name">Ice Breaker Maker</h1>
      <h3>Create an Account</h3>
      <form 
        className="signup-form"
        onSubmit={(e) => {
            e.preventDefault()
            firebase.auth().createUserWithEmailAndPassword(e.target[0].value, e.target[1].value)
            .then(() => {
                console.log('signed up!')
                // redirect to homepage/dashboard
                history.push('/home')
            })
            .catch(err => {
                console.error(err.code)
                // show error with sign up
            })
        }}>
      <label>Email:
       <input
          placeholder="Email"
          type="text"
          name="username"
          />
        <br />
        <label>Password:
         <input
            placeholder="Password"
            type="password"
            name='password'
          />
        </label>
        <br />
        <Button 
            className="submit-button" 
            variant="contained" 
            color="primary" 
            type="submit"
            >
            Submit
        </Button>
        </label>
        </form>
    </div>
  );
}

export default SignUp;