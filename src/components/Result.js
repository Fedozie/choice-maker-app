import React, { useContext } from "react";
import FormContext from "../context/formContext";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Result = () => {
    const { formData } = useContext(FormContext);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const clearData = () => {
        navigate(-1);
        sessionStorage.clear();
    }

    return (

        <div className="main">
            <h1>Choice Maker App</h1>
            <p>When the decision is too hard or too simple, randomize the answers with the Choice Maker App</p>
            <div className="result">
                <div className="result-answers">
                    <h1>{formData.question.includes("?") ? formData.question : `${formData.question}?`}</h1>
                    <h3>Your Randomized Answer is: {formData.answer}</h3>
                </div>
                <div className="result-buttons">
                    <button className="re-ask-btn" onClick={goBack}>Ask Again ?</button>
                    <button className="new-ask-btn" onClick={clearData}>
                        <BsArrowCounterclockwise className="redo-icon"/>
                        Ask Another Random Question
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Result;