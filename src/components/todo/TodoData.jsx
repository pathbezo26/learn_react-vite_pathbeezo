const TodoData = (props) => {
    //props là object
    //const { hobby, inf } = props
    const hobby = props.hobby
    const inf = props.inf

    console.log(">>>check props: ", props)
    return (
        <div className="todo-data">
            <div>Learning React</div>
            <div>Playing football </div>
            <div>Learning Nodejs</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;