import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

export default function TodoList({_, deleteHandler, doneHandler}) {

const todos = useSelector(state => state);


  return(
    <ul>
      {todos.map(el => <Todo key={el.id} {...el}/>)}
    </ul>
  )
}
