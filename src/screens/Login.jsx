import React, { useContext } from 'react';
import { useHistory } from "react-router-dom"
import './Login.css'
import Button from '@material-ui/core/Button'

import firebase from 'firebase/app'
import 'firebase/auth'
import { GlobalContext } from '../components/context/GlobalContext';

function Login(props) {
    const history = useHistory()

    let {
        auth
    }= useContext(GlobalContext)
    

  return (
    <div className="login-container">
      <h1 className="app-name">Ice Breaker Maker</h1>
      <div className="login-buttons-container">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault()
            firebase.auth().signInWithEmailAndPassword(e.target[0].value, e.target[1].value)
              .then(() => {
                auth.signIn()
                 history.push('/')
              })
              .catch(err => {
                console.log(err.code)
                //show error with login
              })
          }}  
        >
          <label>Email: 
            <input
            type="text"
            name="email"
            />
          <br />
          <label>Password:
           <input
              type='password'
              name='password'
            />
          </label>
          </label>
          <Button
            className="login-button"
            variant="contained"
            color="primary"
            type="submit">
            Login
            </Button>
          </form>
          <p> Or </p>
          <Button className="login-button" variant="contained" color="primary">Login With Google</Button>
        </div>
    </div>
  );
}

export default Login;
