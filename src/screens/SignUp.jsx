import React, { useContext } from 'react';
import './SignUp.css'
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom"
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { GlobalContext } from '../components/context/GlobalContext';

function SignUp(props) {
  const history = useHistory()
  let {
    auth
}= useContext(GlobalContext)
  return (
    <div className="signup-container">
      <h1 className="app-name">Ice Breaker Maker</h1>
      <h3>Create an Account</h3>
      <form 
        className="signup-form"
        onSubmit={(e) => {
            e.preventDefault()
            firebase.auth().createUserWithEmailAndPassword(e.target[0].value, e.target[1].value)
            .then(user => {

                let today = new Date()
                let day = today.getDate().toString()
                let month = (today.getMonth() + 1).toString()
                let year = today.getFullYear().toString()
                let todaysDate = month.concat('-',day,'-',year)

                firebase.firestore().collection('users')
                .add({
                    userID: user.user.uid,
                    joined: todaysDate
                })
                .then(docRef => {
                    console.log(docRef.id)
                })
                .catch(err => {
                    console.error(err.code)
                })
                auth.signIn()
                history.push('/')
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