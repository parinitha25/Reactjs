import React from 'react';

var Funone=(props)=>{
    console.log(props);
    return(
        <div>
            Name:{props.children}|
            Age:{props.age}
        </div>
    );
}
export default Funone;