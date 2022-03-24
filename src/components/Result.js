import React from 'react';
import {BsArrowCounterclockwise} from "react-icons/bs";

const Result = (props) => {
    return (
        <div className = "main">
            <h1>Choice Maker App</h1>
            <p>When the decision is too hard or too simple, randomize the answers with the Choice Maker App</p>
            <div className = "result">
                <div className = "result-answers">
                    <h1>Placeholder Text!</h1>
                </div>
                <div className = "result-buttons">
                    <button className = "re-ask-btn">Ask Again ?</button>
                    <button className = "new-ask-btn" onClick = {props.toForm}>
                        <BsArrowCounterclockwise className = "redo-icon"/>
                        Ask Another Random Question      
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Result;