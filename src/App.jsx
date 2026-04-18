import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'


function App() {
  const hobby = "Playing football"
  const inf = {
    country: "Viet Nam",
    address: "DeGi, GiaLai"
  }

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning piano" },
    { id: 2, name: "Jugging" }
  ])
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
  return (
    <div className="todo-container">

      <div className="todo-title">My Todo</div>

      <TodoNew
        addNewTodo={addNewTodo}
      />

      <TodoData
        hobby={hobby}
        inf={inf}
        todoList={todoList}
      />

      <div className='todo-image'>
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  )
}

export default App
