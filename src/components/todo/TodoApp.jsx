import './todo.css'
import TodoData from './TodoData'
import TodoNew from './TodoNew'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () => {

    const [todoList, setTodoList] = useState([])
    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 999999),
            name: name
        }

        setTodoList([...todoList, newTodo])
        //tránh chỉnh sửa trực tiếp state
        //todoList.push(newTodo)
        //setTodoList(todoList)
    }

    const deleteTodo = (id) => {
        alert("Do you delete todo " + id + "?")
        const listTodoNew = todoList.filter((todo, index) => todo.id !== id)
        setTodoList(listTodoNew)
    }

    return (
        <div className="todo-container">
            <div className="todo-title">My Todo</div>

            <TodoNew
                addNewTodo={addNewTodo}
            />

            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />
                :
                <div divclassName='todo-image'>
                    <img src={reactLogo} className="logo" />
                </div>
            }
        </div >
    )
}

export default TodoApp