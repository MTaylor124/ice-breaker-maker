import React from 'react';
import './SignUp.css'

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
        <label>Password:
         <input
            placeholder="Password"
            type="password"
            name='password'
          />
        </label>
        <button>Submit</button>
        </label>
        </form>
    </div>
  );
}

export default SignUp;