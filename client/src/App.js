import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodosList/TodosList';

function App() {

  const [todos, setTodos] = useState([]);



  const  doneHandler = (doneId, setComp) => {
    setTodos((prev) => (prev.map((el) => {
      if (el.id === doneId) {
        console.log('rnter');
        return {
          ...el,
          completed: !el.completed
        }
      } 
      return el
    }))
    )
  }
  
  const  deleteHandler = (delId) => {
    setTodos(todos.filter(el=> el.id !== delId))
  }

  function addHandler(text) {
    setTodos(prev =>  {
      return [...prev, {
      text,
      id: Date.now(),
      completed: false,
    }]})
  }

  console.log({todos});

  return ( 
    <div className="container py-5">
      <AddTodo addHandler={addHandler} />
      <TodoList todos={todos} deleteHandler={deleteHandler} doneHandler={doneHandler}/>
    </div>
  );
}

export default App;
