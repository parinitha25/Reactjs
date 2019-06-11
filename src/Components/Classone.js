import React, { Component } from 'react';
import Funone from './Funone';

class Classone extends Component {
    render() {
        return (
            <div>
             <h1>{this.props.title}</h1>
             <Funone age="20">abc</Funone>
             <Funone age="30">xyz</Funone> 
             <Funone age="40">pqr</Funone>  
            </div>
        )
    }
}

export default Classone;