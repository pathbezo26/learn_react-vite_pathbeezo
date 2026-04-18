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

  const addNewTodo = (name) => {
    alert(`func add new todo is called by ${name}`)
  }

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning piano" },
    { id: 2, name: "Jugging" }
  ])

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
