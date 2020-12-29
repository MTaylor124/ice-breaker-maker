import React from 'react';
import './SignUp.css'
import Button from '@material-ui/core/Button'

function SignUp(props) {
  return (
    <div className="signup-container">
      <h1 className="app-name">Ice Breaker Maker</h1>
      <h3>Create an Account</h3>
      <form className="signup-form">
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
        <Button className="submit-button" variant="contained" color="primary">Submit</Button>
        </label>
        </form>
    </div>
  );
}

export default SignUp;