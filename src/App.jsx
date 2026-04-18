import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'


function App() {
  const hobby = "Playing football"
  const inf = {
    country: "Viet Nam",
    address: "DeGi, GiaLai"
  }

  const addNewTodo = (name) => {
    alert(`func add new todo is called by ${name}`)
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

      />

      <div className='todo-image'>
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  )
}

export default App
