import { use } from "react"
import { useState } from "react"

const TodoNew = (props) => {
    console.log(props)
    const { addNewTodo } = props
    //addNewTodo("Beezo")
    const [valueInput, setValueInput] = useState("Bin")
    const handleClick = () => {
        addNewTodo(valueInput)
    }
    const handleOnChange = (text) => {

        setValueInput(text)
    }


    return (
        <div className='TodoNew'>
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            ></input>
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My input: {valueInput}
            </div>
        </div >
    )
}

export default TodoNew;