import React from 'react';

const Result = () => {
    return (
        <div className = "main">
            <h1>Choice Maker App</h1>
            <p>When the decision is too hard or too simple, randomize the answers with the Choice Maker App</p>
            <div className = "result">
                <div className = "result-answers">
                    <h1>Placeholder Text!</h1>
                </div>
                <div className = "result-buttons">
                    <button>Ask Again ?</button>
                    <button>Ask Another Random Question</button>          
                </div>
            </div>
        </div>
    );
}
 
export default Result;