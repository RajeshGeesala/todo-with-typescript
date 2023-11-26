import { disconnect } from 'process';
import React, { useState } from 'react'
import "./App.css"
import InputFiled from './InputFiled';
import { TODO } from './modal';
import TodoComponent from './TodoComponent';
// import Display from './Display';
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TODO[]>([])
  const handleAdd = (event:React.SyntheticEvent) => { event.preventDefault()  ;
    if(todo){ 
      setTodos([...todos , {id : Date.now(), todo,isDone:false}]) 
      setTodo("")
    }} 

 
      
console.log(todos)
  return (
    <div className='App'>
      <center>
        <h1 className='heading'>TODO APP</h1>
        <InputFiled todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </center>
         <TodoComponent todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;