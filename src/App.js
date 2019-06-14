import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Classone from './Task2/Classone';
import Signup from './Task1/Signup';
import Airthmetic from './Task3/Airthmetic';
import Input from './Task4/Input';
import Apia from './Task5/Apia';

  class App extends Component{
    render(){
  return (
      <Router>
      <Switch>
      <Route exact path='/task1' component={Signup}></Route>
      <Route exact path='/task2' component={Classone}></Route>
      <Route exact path='/task3' component={Airthmetic}></Route>
      <Route exact path='/task4' component={Input}></Route>
      <Route exact path='/task5' component={Apia}></Route>
      </Switch>
      </Router>
   
  );
}
}


export default App;
// import React, { Component } from 'react';
// import Contacts from './Task5/Contactb';

// class Apia extends Component {
//     render() {
//         return (
//             <div>
//                  <Contacts hello={this.state.contacts} />  
//                 {/* <Contacts/> */}
//             </div>
//         )
//     }
//     state = {
//         contacts:''
//       };
//       componentDidMount(){
//           console.log("After componentDidMount");
//           fetch('https://api.github.com/users/KrunalLathiya')
//           .then(res=>res.json())
//           .then((data)=>{
//               this.setState({contacts:data})
//           })
//           .catch(console.log)
//       }

//     }

// export default Apia;
// import React, { Component } from 'react';
// import Contacts from './Task5/Contactb';

// class Apia extends Component {
//     render() {
//         return (
//             <div>
//                  <Contacts hello={this.state.contacts} />  
//                 {/* <Contacts/> */}
//             </div>
//         )
//     }
//     state = {
//         contacts:''
//       };
//       componentDidMount(){
//           console.log("After componentDidMount");
//           fetch('https://jsonplaceholder.typicode.com/posts/1')
          
//           .then(res=>res.json())
//           .then((data)=>{
//               this.setState({contacts:data})
//           })
//           .catch(console.log)
//       }

//     }

// export default Apia;
