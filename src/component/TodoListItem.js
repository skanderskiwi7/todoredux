import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteTask,toggleTask} from '../Redux/Todo'
import { useDispatch } from 'react-redux';
const TodoListItem = ({todo}) => {
    const Dispatch = useDispatch()
    const handelDelet=(id)=>{
        Dispatch(deleteTask(id))
    }
  return (
    <div  style={{display:'flex' , padding:"10px"}}  >
    
            <li>
{todo.text}
            </li>
         <div style={{marginLeft:"100px"}}>
         <Button variant="outline-secondary" onClick={()=>handelDelet(todo.id)}>Remove</Button>
            <Button variant="outline-warning"   onClick={()=>Dispatch(toggleTask(todo.id))}  >{todo.done ? 'yes':'no'}</Button>
         </div>
        
    </div>
  )
}

export default TodoListItem