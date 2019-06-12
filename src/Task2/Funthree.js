import React from 'react';

var Funthree=(props)=>{
    console.log(props);
    return(
        <div>
         Name:{props.Name}|
         D.O.B:{props.children}
            
        </div>
    );
}
export default Funthree;