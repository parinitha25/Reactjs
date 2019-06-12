import React, { Component } from 'react';
import Funtwo from './Funtwo';

class Classtwo extends Component {
    render() {
        return (
            <div>
             <h1>{this.props.title}</h1>
             <Funtwo Name="Reshu">Mysore</Funtwo>
             <Funtwo Name="Anu">Mandya</Funtwo> 
             <Funtwo Name="Kerthi">Mangalore</Funtwo>  
            </div>
        )
    }
}

export default Classtwo;