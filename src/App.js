import logo from './logo.svg';
import './App.css';
import AddTodos from './Componenets/AddTodos';
import Todos from './Componenets/Todos';
import { useState, useEffect } from 'react';
import Header from './Componenets/Header';


function App() {
const [list, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("tasks");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

  const onDelete = (todo) =>{
  console.log("I am deleting this todo", todo);
  setTodos(list.filter((e) => {
    return e!==todo; 
  }));
}
const addTodo = (title, des) => {
    console.log("I am adding this todo", title, des);
    const newTodo = {
      sno: list.length +1,
      title : title,
      des: des
    }

    setTodos([...list, newTodo]);
  }
  return (
    <>
    <div className='main'>
    <div className='pos'>
    <Header/>
    </div>
    <div className='con'>
      <AddTodos addTodo = {addTodo}/>
    <Todos array = {list} onDelete = {onDelete}/>
    </div>
    </div>
    </>
  );
}

export default App;
