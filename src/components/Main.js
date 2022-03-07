import React from 'react';
import {useState} from "react";
import Form from './Form';

const Main = (props) => {
    

    return (
        <div className="main">
            <div className="main-title">
                <h2>Choice Maker App</h2>
                <p>When the decision is too hard or too simple, randomize the answers with the Choice Maker App</p>
            </div>
            <Form onSubmit = {props.toResult}/>
        </div>
    );
}
 
export default Main;