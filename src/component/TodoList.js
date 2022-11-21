import React from 'react'
import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux';


const TodoList = () => {

    const todo = useSelector(state=>state.todo)


  return (
    <div>
        {
            todo.map((el)=> (    <TodoListItem  todo={el} />))        }
    
    </div>
  )
}

export default TodoList