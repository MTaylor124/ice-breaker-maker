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
          <Button className="login-button" variant="contained" color="primary">Login With Google</Button>
          <Button className="login-button" variant="contained" color="primary">Login</Button>
        </div>
    </div>
  );
}

export default Login;
