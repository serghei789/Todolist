import Todo from "../Todo/Todo";

export default function TodoList({todos, deleteHandler, doneHandler}) {

  return(
    <ul>
      {todos.map(el => <Todo elem={el} deleteHandler={deleteHandler} doneHandler={doneHandler}/>)}
    </ul>
  )
}
