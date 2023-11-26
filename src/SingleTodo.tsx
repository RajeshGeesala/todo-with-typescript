import React, { useState } from 'react';
import { TODO } from './modal';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

type Props = {
  todo: TODO,
  todos: TODO[],
  setTodos: React.Dispatch<React.SetStateAction<TODO[]>>
};

// ... (previous imports)

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
   
  
    const handleDone = (id: number) => {
      setTodos(todos.map((t) =>
        t.id === id ? { ...t, isDone: !t.isDone } : t
      ));
    };
  
    const handleDelete = (id: number) => {
      setTodos(todos.filter((t) => t.id !== id));
    };
  

  
   
    return (
      <div className='card_todo'>
        <Card>
          <form >
            <Card.Body>
        
              {todo.isDone ? (
                <s className="todo_task">{todo.todo}</s> ) :
                 (  <span className="todo_task">{todo.todo}</span>)}
            </Card.Body>
            <Card.Footer>
              <center>
                <Button
                  className='btn btn-danger ms-2'
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    handleDone(todo.id);
                  }}
                  className='btn btn-success ms-2'
                >
                  <FontAwesomeIcon icon={faCheck} />
                </Button>
              </center>
            </Card.Footer>
          </form>
        </Card>
      </div>
    );
  };
  
  export default SingleTodo;
  
