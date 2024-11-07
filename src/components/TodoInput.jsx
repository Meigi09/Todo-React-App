import {useState} from "react";


export function TodoInput(props) {
    const {handleAddTodo}=props
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)
    return (
        <div className="input-container">
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text" placeholder="Add a task"/>
            <button onClick={()=>{
                if(!inputValue){return}
                handleAddTodo(inputValue)
                setInputValue('')
            }}>
                <img width="30" height="30" src="https://img.icons8.com/ios/50/plus-math--v1.png" alt="plus-math--v1"/>
            </button>
        </div>)
}