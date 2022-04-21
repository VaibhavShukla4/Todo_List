import React, { useState } from 'react'
import Card from './Card'
import './App.css'
function App() {

  // usestate to save the variable/todotext
  const [todo, setTodo] = useState('');
  // todo => test

  // to save all the todos
  const [todos, setTodos] = useState([]);
  //todos => ['test1', 'test2']

  const add = () => {
    console.log(todo)
    setTodos([...todos, todo]);
    setTodo('');
  }

  return (
      <div className="todo_box">
        
        <h1 className="header">
          TODO LIST
        </h1>
         
        <input className="Todo__Text" type="text" onChange={(event) => setTodo(event.target.value)} placeholder="Todo-Text" />
        <button className="add__todo" onClick={add} >Add</button>
        {todos.map((todotext, idx) => (
          <Card todotext = {todotext} todos = {todos} cardId = {idx} setTodos = {setTodos}/>
        ))}

      </div>
  )
}

export default App
