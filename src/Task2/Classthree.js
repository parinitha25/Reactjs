import React, { Component } from 'react';
import Funthree from './Funthree';

class Classthree extends Component {
    render() {
        return (
            <div>
             <h1>{this.props.title}</h1>
             <Funthree Name="Reshu">25-Mar</Funthree>
             <Funthree Name="Anu">12-Dec</Funthree> 
             <Funthree Name="Kerthi">10-Feb</Funthree>  
            </div>
        )
    }
}

export default Classthree;