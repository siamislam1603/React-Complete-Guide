import React from 'react';
import './UserOutputs.css';
const userOutputs=(props)=>{
    return(
        <div className="UserOutputs">
            <p>I'm {props.userName}</p>
            <p>It's overriden</p>
        </div>
    );
}
export default userOutputs;