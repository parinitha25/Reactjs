import React, { Component } from 'react';
import Contacts from './Contacts';

class Apia extends Component {
    render() {
        return (
            <div> 
                 <Contacts list={this.state.contacts} lista={this.state.contactb} />  
               
            </div>
        )
    }
    state = {
        contacts:'',
        contactb:''
      };
      componentDidMount(){
          console.log("After componentDidMount");
          fetch('https://api.github.com/users/KrunalLathiya')
          .then(res=>res.json())
          .then((data)=>{
              this.setState({contacts:data})
          })
          .catch(console.log)
     
        
        fetch('https://jsonplaceholder.typicode.com/posts/1')         
        .then(res=>res.json())
        .then((data1)=>{
            this.setState({contactb:data1})
        })
        .catch(console.log)
    }
    }

export default Apia;