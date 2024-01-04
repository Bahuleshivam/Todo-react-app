
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, {useState} from 'react';
import AddTodos from "./MyComponents/AddTodos"


function App(todo) {
  const onDelete = (todo)=>{
    console.log("i am deleted of todo", todo )
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title, desc)=>{
    console.log("i am adding this todo ", title, desc)
    let sno = todos[todos.length-1].sno + 1
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }

const [todos, setTodos]= useState([
    {
    sno: 1,
    title: "go to the market",
    desc: "you need to go to the market to get this job done1"
  },
    {
    sno: 2,
    title: "go to the mall",
    desc: "you need to go to the market to get this job done2"
  },
    {
    sno: 3,
    title: "go to the ghat",
    desc: "you need to go to the market to get this job done3"
  }
])


  return (
 <>
 <Header title = "My Todos List" searchBar = {false}/>
 <AddTodos addTodo = {addTodo}/>
 <Todos todos ={todos} onDelete={onDelete}/>
 <Footer/>
 </>
  );
}

export default App;
