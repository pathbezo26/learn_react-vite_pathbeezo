import { useState } from "react"

const TodoNew = (props) => {
    const { addNewTodo } = props  //addNewTodo("Beezo")
    const [valueInput, setValueInput] = useState([])

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    const handleOnChange = (text) => {
        setValueInput(text)
    }

    return (
        <div className='TodoNew'>
            <input
                type="text"
                value={valueInput}
                onChange={(event) => handleOnChange(event.target.value)}
            ></input>
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div >
    )
}

export default TodoNew;