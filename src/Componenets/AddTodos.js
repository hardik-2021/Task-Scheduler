import React from 'react'
import { useState } from 'react'

const AddTodos = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const submit = (e) => {
    e.preventDefault();    
    if(!title || !des){
      alert("Title or description cannot be blank");
    }   
    else {addTodo(title, des);
    setTitle("");
    setDes("");}
  };


  return (
    <div className='addtodo'>
      <form onSubmit={submit}>
  <div className="form-group ">
    <label  >Task title: </label>
    <input className='ttl' value = {title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Enter title"></input>
  </div>
  <div className="form-group ">
    <label >Description: </label>
    <input className='dds' type="description" value = {des} onChange={(e) => {setDes(e.target.value)}} placeholder="Enter Description here"></input>
  </div>
  <div className='form-group'>
  <button type="submit" className="btn add-task btn-success">Add Task</button>
  </div>
</form>
    </div>
  )
}

export default AddTodos
