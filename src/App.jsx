import React, {useState} from 'react'
import './App.css'
import Input from './components/todoinput/Input.jsx'
import { IoMdCloseCircleOutline } from "react-icons/io";

function App() {

  const [todos, setTodos] = useState([]);

  
  const addTodo = (value) => {
    if (value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false}])
    } else {
      alert("Введите текст")
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        done: !todo.done,
      }
    }))
  }

  const removeTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
        <div className="container">
          <div className="todo-wrapper">
            <h1 className='todo-title'>Todo App</h1>
             <Input
                addTodo = {addTodo}
             />
                <ul className="todo-ul">
                    {
                      todos.map(todo => {
                        return (
                          <li onClick={() => toggleTodo(todo.id)} key={todo.id} className={todo.done ? 'todo-li done' : 'todo-li'}>
                          {todo.text}
                          <IoMdCloseCircleOutline onClick={e => {
                            e.stopPropagation();
                            removeTodo(todo.id)
                          }} style={{color:'red', marginLeft:'40px'}} />
                        </li>
                        )
                      })
                    }
                </ul>
          </div>
        </div>
    </>
  )
}

export default App
