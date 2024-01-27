/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
  let [todos,setTodos]=useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    let json=await res.json();
    setTodos(json.todos);
  })
  return (
    <div>
      <CreateTodo setTodos={setTodos}></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  );
}

export default App
