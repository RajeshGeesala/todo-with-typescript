import React from 'react'
import { TODO } from './modal'
import SingleTodo from './SingleTodo'

interface Props {
    todos: TODO[],
    setTodos: React.Dispatch<React.SetStateAction<TODO[]>>
}
const TodoComponent: React.FC<Props> = ({ todos, setTodos }) => {
    console.log(todos)
    return (
        <div className='todo row'>
            {todos.map((todo) => <SingleTodo
                todo={todo}
                 key={todo.id} 
                todos={todos}
                setTodos={setTodos} />)}
        </div>
    )
}

export default TodoComponent