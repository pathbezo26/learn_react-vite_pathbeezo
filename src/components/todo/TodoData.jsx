const TodoData = (props) => {
    //props là object
    //const { hobby, inf } = props
    const hobby = props.hobby
    const inf = props.inf
    return (
        <div className="todo-data">
            <div>Learning React</div>
            <div>My hobbby is {props.hobby}</div>
            <div>I live in {props.inf.country}</div>
        </div>
    )
}

export default TodoData;