import React, { useContext, } from 'react';
import { BsPlusCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import FormContext from '../context/formContext';

const Form = (props) => {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate();
    const optionsArr = Object.values(props.enteredOptions);

    const sessionData = {
        question: formData.question,
        options: optionsArr
    }

    const generateRandomInt = () => {
        return Math.floor(Math.random() * Object.values(props.enteredOptions).length)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const randomNum = generateRandomInt();
        const selectedOption = optionsArr.find((_, index) => index === randomNum)
        const updatedData = {
            ...formData, answer: selectedOption
        }
        setFormData(updatedData)
        sessionStorage.setItem('formData', JSON.stringify(sessionData));
        navigate('/result');
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="headings">Question</h3>
            <div className="input-group">
                <input
                    type="text"
                    name="question"
                    id="question"
                    placeholder="Q: Enter your question here"
                    value={formData.question}
                    onChange={(e) => setFormData({
                        ...formData, question: e.target.value
                    })}
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
                        onClick={props.addOption}
                        disabled={Object.values(props.enteredOptions).length >= 26}
                    >
                        <BsPlusCircle className="plus-icon"
                        />
                        Add Another Option
                    </button>
                    <input
                        type="submit"
                        className="answerButton"
                        value="Answer!"
                        disabled={Object.values(props.enteredOptions).filter((val) => val.trim() !== "").length < 2 || formData.question === ""}
                    />
                </div>
            </div>
        </form>
    );
}

export default Form;