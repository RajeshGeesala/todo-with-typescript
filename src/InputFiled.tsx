import React, { useRef, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd(event: React.SyntheticEvent): void
};

const InputFiled: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const blur = useRef<HTMLInputElement>(null) ;

  return (

    <div>
      <Form onSubmit={(e)=> {
        handleAdd(e) ;
        blur.current?.blur()
      }}>
        <Form.Control className='input' value={todo} ref={blur}
          onChange={(e) => { setTodo(e.target.value) }} placeholder='Enter Your Task Here' />
        <Button type='submit' className='input_button'> Add </Button>
      </Form>
    </div>
  )
}

export default InputFiled