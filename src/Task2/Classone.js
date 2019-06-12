import React, { Component } from 'react';
import Funone from './Funone';
import Classtwo from './Classtwo';
import Classthree from './Classthree';


class Classone extends Component {
    render() {
        return (
            <div>
             <h1>{this.props.title}</h1>
             <Funone age="20">abc</Funone>
             <Funone age="30">xyz</Funone> 
             <Funone age="40">pqr</Funone>  
             <Classtwo/>
             <Classthree/>
            </div>
        )
    }
}

export default Classone;