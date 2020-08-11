import React from 'react';
import styled from 'styled-components';

const person=(props)=>{
    const StyledDiv=styled.div`
        margin: 10px auto;
        box-shadow: 0 2px 3px #848484;
        width: 60%;
        padding: 16px;
        text-align: center;

        @media (min-width:500px){
            width:450px;
        }
    `;
    return(
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
};
export default person;