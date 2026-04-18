const TodoNew = (props) => {
    console.log(props)
    const { addNewTodo } = props
    //addNewTodo("Beezo")
    const handleClick = () => {
        alert("click add new todo is done")
    }
    const handleOnChange = (text) => {
        console.log(">>> handleOnChange is excuted", text)
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
        </div >
    )
}

export default TodoNew;