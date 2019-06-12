import React from 'react';
// import logo from './logo.svg';
import './Signup.css';
import Signin from './Signin';


function Signup() {
  return (
    <div className="background">
      <label>Sign  Up</label><br/><br/>
      <form >
          <label>Name</label><br/>
          <input type="text"   className="name"></input><br/><br/>
          <label>Email</label><br/>
          <input type="text"  name="name" className="ename"></input><br/><br/>
          <label>Password</label><br/>
          <input type="text"  name="name" className="pname"></input><br/><br/>
          <label>Confirmation</label><br/>
          <input type="text"  name="name" className="cname"></input><br/><br/>
          <input type="button" value="Create my account" name="Create my account" className="button"></input>
          <Signin/>
      </form>
    
    </div>
  );
}

export default Signup;