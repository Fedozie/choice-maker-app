import React from 'react';
import { BsPlusCircle } from "react-icons/bs";

const Form = (props) => {

    const generateRandomInt = () => {
        return Math.floor(Math.random() * Object.values(props.enteredOptions).length)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const randomNum = generateRandomInt();
        const optionsArr = Object.values(props.enteredOptions);
        const selectedOption = optionsArr.find((_, index) => index === randomNum)
        console.log(selectedOption)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="headings">Questions</h3>
            <div className="input-group">
                <input
                    type="text"
                    name="question"
                    id="question"
                    placeholder="Q: Enter your question here"
                    value={props.enteredQuestion}
                    onChange={(e) => props.setEnteredQuestion(e.target.value)}
                />
            </div>
            <hr />
            <h3 className="headings">Options</h3>
            <div className="options">
                {
                    props.inputs.map((input) => (
                        <div className={input.className} key={input.id}>
                            <input
                                type={input.type}
                                name={input.name}
                                id={input.mainId}
                                placeholder={input.placeholder}
                                value={props.enteredOptions[input.name] || ''}
                                onChange={(e) => props.setEnteredOptions({
                                    ...props.enteredOptions,
                                    [input.name]: e.target.value
                                })}
                            />
                        </div>
                    ))
                }
                <div className="buttons">
                    <button
                        type='button'
                        className="optionButton"
                        onClick={props.addOption}>
                        <BsPlusCircle className="plus-icon"
                        />
                        Add Another Option
                    </button>
                    <input type="submit" className="answerButton" value="Answer!" />
                </div>
            </div>
        </form>
    );
}

export default Form;
