import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addTask} from '../Redux/Todo';
const TodoAdd = () => {

  const [text,setText] = useState('')

  const Dispatch = useDispatch()

  const handeladd=()=>{
    
Dispatch(addTask(text))

setText('')

  }


  return (
    <div>
      <input placeholder='put a todo '  value={text}
            onChange={(e)=>setText(e.target.value)}/>
      <button onClick={()=>handeladd()} >add</button>
    </div>
  )
}

export default TodoAdd