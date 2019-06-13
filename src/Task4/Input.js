import React, { Component } from 'react';
import  './Input.css';

class Input extends Component {
    constructor(props){
        super(props);
        this.state={
           name:'abc',
           namea:''   
        };
}
changeName=()=>{
    this.setState({value:'xyz'});
}
changeText=(e)=>{
    this.setState({namea:e.target.value})
}
    render() {
        return (
            <div>
                <h1 className="aligna">{this.state.value}</h1>
                <input type="text" value={this.state.name} className="align"></input><br></br> <br></br>
                <input type="button" value="click" onClick={this.changeName} className="alignb"></input> <br></br> <br></br>
                <h1 className="aligna">{this.state.namea}</h1>
                <input type="text"  onChange={this.changeText} className="alignc"></input>
               
            </div>
        );
    }
}

export default Input;