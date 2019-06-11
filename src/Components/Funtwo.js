import React from 'react';

var Funtwo=(props)=>{
    console.log(props);
    return(
        <div>
            Name:{props.Name}|
            City:{props.children}
            
        </div>
    );
}
export default Funtwo;