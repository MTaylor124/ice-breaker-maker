import React from 'react';
import './Login.css'
import Button from '@material-ui/core/Button'
// import firebase from 'firebase'

function Login(props) {

// let provider = new firebase.auth.GoogleAuthProvider();

  return (
    <div className="login-container">
      <h1 className="app-name">Ice Breaker Maker</h1>
        <div className="login-buttons-container">
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
          <Button className="login-button" variant="contained" color="primary">Login</Button>
          <p> Or </p>
          <Button className="login-button" variant="contained" color="primary">Login With Google</Button>
        </div>
    </div>
  );
}

export default Login;
