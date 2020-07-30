import React from 'react';

const userInputs=(props)=>{
    const inputStyle={
        border:'2px solid red'
    };
    return(
        <input type='text' onChange={props.changed} value={props.userName} style={inputStyle}/>
    );
}
export default userInputs;