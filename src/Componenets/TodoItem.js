import React from 'react'
import { useState } from 'react'

const TodoItem = ({arr, onDelete}) => {
const [completed, setCompleted] = useState(false);
const [details, setDetails] = useState(false);
  return (
    <>{details? (
      // <div className={completed?'main-todo-done':'main-todo'}>
      // <div className='main-title' >
      //     <h4 className=''>{arr.title}</h4>
      //     <div className=''>
      //     <button className=' ' onClick={() => setDetails(!details)}>Details</button>
      //     <button className='' onClick={()=>setCompleted(!completed)}> {completed?<p>Not Done</p>:<p>Done</p>}</button>
      //     <button className='' onClick={() => onDelete(arr)}>Delete</button>
      //     </div>
      // </div>
      //     <div className='main-desc'><p>{arr.des}</p></div>
      //   </div>
      <div className='main-todo'>
        <div className={completed?'main-title-done':'main-title'}>
          <h4 className='main-title-title'>{arr.title}</h4>
          <div className='status'>
          <button className='btn btn-success' onClick={() => setDetails(!details)}>Details</button>
          <button className='btn btn-success' onClick={()=>setCompleted(!completed)}> {completed?<p>Not Done</p>:<p>Done</p>}</button>
          <button className='btn btn-danger' onClick={() => onDelete(arr)}>Delete</button>
          </div>
        </div>
        <div className='main-desc'>
        <p className='margin-des'>{arr.des}</p>
        </div>

      </div>
      ):( <div className={completed?'todo-done':'todo'} >
          <h4 className='todo-title'>{arr.title}</h4>
          <div className='status'>
          <button className='btn btn-success' onClick={() => setDetails(!details)}>Details</button>
          <button className='btn btn-success' onClick={()=>setCompleted(!completed)}> {completed?<p>Not Done</p>:<p>Done</p>}</button>
          <button className='btn btn-danger' onClick={() => onDelete(arr)}>Delete</button>
          </div>
        </div>)
    }
    </>
  )
}

export default TodoItem
