import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Form = () => {
    const [num, setNum] = useState(3);
    const history = useNavigate();
    
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
        }
    }

    const handleAnswer = (e) => {
        e.preventDefault();
        const userInputs = {question, options};

        fetch('http://localhost:3000/userInputs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userInputs)
        }).then(()=>{
            history.push('./components/Result')
        })
    }

    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([{
        optionA: '',
        optionB: '',
        optionC: ''
    }]);
    
    return (
        <form className="form" onSubmit={handleAnswer}>
            <h3 className="headings">Questions</h3>
            <div className="input-group">
                <input type="text" name="question" id="question" placeholder="Q: Enter your question here" value={question} onChange={(e) => setQuestion(e.target.value)}/>
            </div>
            <hr/>
            <h3 className="headings">Options</h3>
            <div className="options">
                {
                    inputs.map((input, index) => (
                        <div className={input.className} key={input.id}>
                            <input type={input.type} name={input.name} id={input.mainId} placeholder={input.placeholder} value={options.name} onChange={(e) => setOptions(e.target.value)} />
                        </div>
                    ))
                }
                <div className="buttons">
                    <button className="optionButton" onClick={addOption}>Add Another Option</button>
                    <NavLink to = "/result">
                        <input type="submit" className="answerButton" value="Answer!"/>
                    </NavLink>
                </div>
            </div>
        </form>
    );
}
 
export default Form;
