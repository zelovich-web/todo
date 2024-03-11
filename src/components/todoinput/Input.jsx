import React, {useState} from 'react'
import './Input.css'
import { IoMdAddCircleOutline } from "react-icons/io";
const Input = (props) => {

    const [value, setValue] = useState('');

  return (
    <div className='input-wrapper'>
      <input className='input' value={value} onChange={e => setValue(e.target.value)} type="text" placeholder='Введите задачу...' />
      <IoMdAddCircleOutline style={{color: '#112D4E',fontSize:'45px'}} onClick={e => {props.addTodo(value), setValue('')}}  />
    </div>
  )
}

export default Input
