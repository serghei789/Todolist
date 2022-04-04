import { useDispatch } from 'react-redux';
import { deleteTodo, doDone } from '../../redux/actions';


export default function Todo({ id, text, completed }) {

const dispatch = useDispatch()

const delTodo = () => {
  dispatch(deleteTodo(id))
}

const doneHandler = () => {
  dispatch(doDone(id))
}

  return(
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={completed ? 'text-decoration-line-through' : ''}>{text}</span>
      <div>
        <button onClick={doneHandler} className={`btn btn-success`}>{completed ? 'Undone' : 'Done'}</button>
        <button onClick={delTodo} className="btn btn-danger mx-2">Delete</button>
      </div>
    </li>
  )
}
