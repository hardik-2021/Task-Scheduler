import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {

  
    
  return (
    <div>
      {props.array.length===0 ? (
        <h2 className='no-todo'>No tasks to display</h2>
      ):(
        props.array.map((todo) => {
        return <TodoItem arr = {todo} key={todo.sno} onDelete = {props.onDelete}/>
      })
      )}
      
    </div>
  )
}

export default Todos
