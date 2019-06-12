import './Signin.css';
import React ,{Component} from 'react';



class Signin extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'parinitha'
        }
        console.log('signin initialization');
    }

componentWillMount(){
    console.log('signin componentWillMount');
}
componentDidMount(){
    console.log('signin componentDidMount');
}
render(){
    console.log('signin render');
    return(<div>
        <div><br/><br/>
      <div className="background1"> 

      <label className="sign">SIGN IN</label><br/><br/>
      <form>
          <input type="text"  name="name" placeholder="email Address" id="email"></input><br/><br/>
          <input type="text"  name="name" placeholder="password"></input><br/><br/>
          <input type="button" value="Login" name="Login" className="login"></input>
          <p>Forgot my password?</p>
      </form>
      </div>
      <div className="account">Don't have an account?<a href="signup.js">Signup</a></div>
    </div>

    </div>);
   
}
}
export default Signin;