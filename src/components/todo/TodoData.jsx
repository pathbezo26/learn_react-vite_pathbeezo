const TodoData = (props) => {

    const { todoList, deleteTodo } = props
    const handleClickDel = (id) => {
        deleteTodo(id)
    }
    console.log(">>>check props todo: ", todoList)
    return (
        <div className="todo-data">
            {todoList.map((item, idx) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div> {item.name}</div>
                        <button
                            onClick={() => handleClickDel(item.id)}
                        >Xóa</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;