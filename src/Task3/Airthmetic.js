import React, { Component } from 'react';
import './Airthmetic.css';

class Airthmeticop extends Component {
    constructor(props){
        super(props);
        this.state={
            add:10,
            sub:10,
            mul:10    
        };
}
addfun=()=>{
this.setState({add:this.state.add=this.state.add+5});
}
subfun=()=>{
    if(this.state.sub>0)
    this.setState({sub:this.state.sub=this.state.sub-5});
    }
 mulfun=()=>{
    this.setState({mul:this.state.mul=this.state.mul*5});
 } 
    

   render(){
        return( 
        <div>
           <br/><b className="font" >{this.state.add}</b>
                <b className="fonta">{this.state.sub}</b>
                <b className="fontb">{this.state.mul}</b><br/>
        <input type="button" onClick={this.addfun} value="Addition" className="add"></input>
        <input type="button" onClick={this.subfun} value="Subtraction" className="sub"></input>
        <input type="button" onClick={this.mulfun} value="Multification" className="mul"></input>
       
     </div>
       
         )
   }
}



export default Airthmeticop;


