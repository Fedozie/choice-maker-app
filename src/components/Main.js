import React, { useEffect } from 'react';
import { useState } from "react";
import Form from './Form';
import SassyEmoji from '../assets/sassy-emoji.png';

const Main = (props) => {
    const [num, setNum] = useState(2);

    //Function to convert a number to its letter equivalent
    const toABC = (num) => {
        if (num < 1 || num > 26 || typeof num !== 'number') {
            return '-1'
        }
        const leveller = 64
        return String.fromCharCode(num + leveller)
    }

    //Inputs for the options on the form
    const [inputs, setInputs] = useState([
        { className: 'input-group', type: 'text', name: 'option' + toABC(1), placeholder: toABC(1) + ':', id: 1, mainId: 'option' + toABC(1) },
        { className: 'input-group', type: 'text', name: 'option' + toABC(2), placeholder: toABC(2) + ':', id: 2, mainId: 'option' + toABC(2) }

    ])

    //Function to add a new option to the form
    const addOption = (e) => {
        e.preventDefault();
        if (num <= 25) {
            setNum(num + 1);
            setInputs([...inputs, { className: 'input-group', type: 'text', name: 'option' + toABC(num + 1), placeholder: toABC(num + 1) + ':', id: toABC(num + 1), mainId: 'option' + toABC(num + 1) }]);
        } else {
            alert("You have reached your limit, you can't add any more options.")
        }
    }

    //Variables Declarations for the Question and Options
    const [enteredOptions, setEnteredOptions] = useState({});

    useEffect(() => {
        const storedFormData = sessionStorage.getItem('formData');
        if (storedFormData) {
            const parsed = JSON.parse(storedFormData);
            if (parsed.options && Array.isArray(parsed.options)) {
                const restoredOptions = {};
                parsed.options.forEach((opt, index) => {
                    restoredOptions[`option${String.fromCharCode(65 + index)}`] = opt;
                });
                setEnteredOptions(restoredOptions);

                const rebuiltInputs = parsed.options.map((_, index) => {
                    const letter = String.fromCharCode(65 + index);
                    return {
                        className: 'input-group',
                        type: 'text',
                        name: `option${letter}`,
                        placeholder: `${letter}:`,
                        id: index + 1,
                        mainId: `option${letter}`,
                    };
                });
                setInputs(rebuiltInputs);
                setNum(parsed.options.length);
            }
        }
    }, [])

    useEffect(() => {
        const beforeUnload = () => {
            sessionStorage.removeItem('formData');
        }
        window.addEventListener('beforeunload', beforeUnload);
        return () => {
            window.removeEventListener('beforeunload', beforeUnload);
        }
    }, [])

    return (
        <div className="main">
            <div className="main-title">
                <h2>Choice Maker App</h2>
                <div>
                    <p>Make decision making fun again </p>
                    <img src={SassyEmoji} alt="Sassy emoji" loading='lazy'/>
                </div>
            </div>
            <Form
                inputs={inputs}
                setInputs={setInputs}
                addOption={addOption}
                enteredOptions={enteredOptions}
                setEnteredOptions={setEnteredOptions}
            />
        </div>
    );
}

export default Main;