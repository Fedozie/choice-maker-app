import React from 'react';
import {useState} from "react";
import Form from './Form';

const Main = (props) => {
    const [num, setNum] = useState(3);
    
    //Function to convert a number to its letter equivalent
    const toABC = (num) => {
        if(num < 1 || num > 26 || typeof num !== 'number'){
            return '-1'
        }
        const leveller = 64
        return String.fromCharCode(num + leveller)
    }
 
    //Inputs for the options on the form
    const [inputs, setInputs] = useState([
        {className: 'input-group', type: 'text', name:'option' + toABC(1), placeholder:toABC(1) + ':', id: 1, mainId: 'option' + toABC(1)},
        {className: 'input-group', type: 'text', name:'option' + toABC(2), placeholder:toABC(2) + ':', id: 2, mainId: 'option' + toABC(2)},
        {className: 'input-group', type: 'text', name:'option' + toABC(3), placeholder:toABC(3) + ':', id: 3, mainId: 'option' + toABC(3)}
    ])

    //Function to add a new option to the form
    const addOption = (e) => {
        e.preventDefault();
        if(num <= 25){
            setNum(num + 1);
            setInputs([...inputs, {className: 'input-group', type: 'text', name:'option' + toABC(num+1), placeholder:toABC(num+1) + ':', id:toABC(num+1), mainId: 'option' + toABC(num+1)}]);
        }else{
            alert("You have reached your limit, you can't add any more options.")
        }
    }

    //Variables Declarations for the Question and Options
    const [enteredQuestion, setEnteredQuestion] = useState('');
    const [enteredOptions, setEnteredOptions] = useState([{
        optionA: '',
        optionB: '',
        optionC: ''
    }]);

    return (
        <div className="main">
            <div className="main-title">
                <h2>Choice Maker App</h2>
                <p>When the decision is too hard or too simple, randomize the answers with the Choice Maker App</p>
            </div>
            <Form 
                onSubmit = {props.toResult}
                inputs = {inputs}
                setInputs = {setInputs}
                addOption = {addOption}
                enteredQuestion = {enteredQuestion}
                setEnteredQuestion = {setEnteredQuestion}
                enteredOptions = {enteredOptions}
                setEnteredOptions = {setEnteredOptions}
            />
        </div>
    );
}
 
export default Main;