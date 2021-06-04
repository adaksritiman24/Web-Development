// import logo from './logo.svg';
import './App.css'; // used to inject css 
import Header from './MyComponents/Header';
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, {useState} from 'react'; // for using state hook -> particular to react for updating the DOM 
import {useEffect} from 'react'; // for using state hook -> particular to react for updating the DOM 

function App() {
  // let myVariable = 345;
  const onDelete = (todo)=>{
    // console.log("I am onDelete of todo", todo);

    //Deleting this way in react doesnot work-----------
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    //you have to delete todo in this way---------

    setTodos(todos.filter((e)=>{
      return e !== todo;
    }))
  }

  const addTodo = (title, desc, checked)=>{
    // console.log("I am adding this todo", title, desc);
    if(todos.length>0){
      var sno = todos[todos.length-1].sno + 1;
    }else{
      var sno= 1
    }
    const mytodo = {
      sno:sno,
      title: title,
      desc: desc,
      checked: checked
    }
    // console.log("Checked:", checked);
    setTodos([...todos, mytodo]);

    // console.log(todos);
  }
  const [todos, setTodos] = useState([
    
  ])
  useEffect(()=>{
    setTodos(todos);
  })
  return (
     // The following code is JSX(JavaScript syntax Extention) , not HTML
     <>
     <Header title = "My Todo List" searchbar = {false}/>
     <AddTodo addTodo = {addTodo}/> 
     <Todos todos = {todos} onDelete = {onDelete}/>
     <Footer/>
    </>
  );
}

export default App;
