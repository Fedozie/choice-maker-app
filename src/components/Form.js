import React from 'react';
import {useState} from "react";
// import {useHistory} from "react-router-dom";
// import {NavLink} from "react-router-dom";
import {BsPlusCircle} from "react-icons/bs";

const Form = (props) => {
    const [num, setNum] = useState(3);
    // const history = useHistory();
    
    const toABC = (num) => {
        if(num < 1 || num > 26 || typeof num !== 'number'){
            return '-1'
        }
        const leveller = 64
        return String.fromCharCode(num + leveller)
    }
 
    const [inputs, setInputs] = useState([
        {className: 'input-group', type: 'text', name:'option' + toABC(1), placeholder:toABC(1) + ':', id: 1, mainId: 'option' + toABC(1)},
        {className: 'input-group', type: 'text', name:'option' + toABC(2), placeholder:toABC(2) + ':', id: 2, mainId: 'option' + toABC(2)},
        {className: 'input-group', type: 'text', name:'option' + toABC(3), placeholder:toABC(3) + ':', id: 3, mainId: 'option' + toABC(3)}
    ])

    const addOption = (e) => {
        e.preventDefault();
        if(num <= 25){
            setNum(num + 1);
            setInputs([...inputs, {className: 'input-group', type: 'text', name:'option' + toABC(num+1), placeholder:toABC(num+1) + ':', id:toABC(num+1), mainId: 'option' + toABC(num+1)}]);
        }else{
            alert("You have reached your limit, you can't add any more options.")
        }
    }

    const [enteredQuestion, setEnteredQuestion] = useState('');
    const [enteredOptions, setEnteredOptions] = useState([{
        optionA: '',
        optionB: '',
        optionC: ''
    }]);

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            question: enteredQuestion,
            options: enteredOptions.option
        }

        setEnteredQuestion('');
        setEnteredOptions('');
    }
    
    return (
        <form className="form" onSubmit={submitHandler}>
            <h3 className="headings">Questions</h3>
            <div className="input-group">
                <input type="text" name="question" id="question" placeholder="Q: Enter your question here" value={enteredQuestion} onChange={(e) => setEnteredQuestion(e.target.value)}/>
            </div>
            <hr/>
            <h3 className="headings">Options</h3>
            <div className="options">
                {
                    inputs.map((input) => (
                        <div className={input.className} key={input.id}>
                            <input type={input.type} name={input.name} id={input.mainId} placeholder={input.placeholder} value={enteredOptions.option} onChange={(e) => setEnteredOptions(e.target.value)} />
                        </div>
                    ))
                }
                <div className="buttons">
                    <button className="optionButton" onClick={addOption}> 
                        <BsPlusCircle className = "plus-icon"/> 
                        Add Another Option
                    </button>
                    <input type="submit" className="answerButton" value="Answer!"/>
                </div>
            </div>
        </form>
    );
}
 
export default Form;
