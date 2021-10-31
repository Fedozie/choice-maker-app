import {useState} from "react";

const Form = () => {
    const [num, setNum] = useState(4)

    const toABC = (num) => {
        if(num < 1 || num > 26 || typeof num !== 'number'){
            return -1
        }
        const leveller = 64
        return String.fromCharCode(num + leveller)
    }
 
    const [inputs, setInputs] = useState([
        {className: 'input-group', type: 'text', name:'option' + toABC(1), placeholder:toABC(1) + ':', id: 1, mainId: 'option' + toABC(1)},
        {className: 'input-group', type: 'text', name:'option' + toABC(2), placeholder:toABC(2) + ':', id: 2, mainId: 'option' + toABC(2)},
        {className: 'input-group', type: 'text', name:'option' + toABC(3), placeholder:toABC(3)+ ':', id: 3, mainId: 'option' + toABC(3)},
        {className: 'input-group', type: 'text', name:'option' + toABC(4), placeholder:toABC(4) + ':', id: 4, mainId: 'option' + toABC(4)}
    ])

    const addOption = (e) => {
        e.preventDefault();
        setInputs([...inputs, {className: 'input-group', type: 'text', name:'option' + toABC(setNum(num+1)), placeholder:toABC(setNum(num+1)) + ':', id:setNum(num+1), mainId: 'option' + toABC(setNum(num+1))}]);
        console.log(setNum(num+1))
    }

    const handleAnswer = (e) => {
        e.preventDefault();
    }

    return (
        <form action="" className="form">
            <h3 className="headings">Questions</h3>
            <div className="input-group">
                <input type="text" name="question" id="question" placeholder= "Q: Enter your question here"/>
            </div>
            <hr/>
            <h3 className="headings">Options</h3>
            <div className="options">
                {
                    inputs.map((input) => (
                        <div className={input.className} key={input.id}>
                            <input type={input.type} name={input.name} id={input.mainId} placeholder={input.placeholder}/>
                        </div>
                    ))
                }
                <div className="buttons">
                    <button className="optionButton" onClick={addOption}>Add Another Option</button>
                    <input type="submit" className="answerButton" value="Answer!"/>
                </div>
            </div>
        </form>
    );
}
 
export default Form;