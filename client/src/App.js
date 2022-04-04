import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodosList/TodosList';

function App() {

  return ( 
    <div className="container py-5">
      <AddTodo />
      <TodoList/>
    </div>
  );
}

export default App;
