const TodoData = (props) => {

    const { todoList } = props

    console.log(">>>check props todo: ", todoList)
    return (
        <div className="todo-data">
            {todoList.map((item, idx) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div> {item.name}</div>
                        <button>Xóa</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;