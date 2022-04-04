import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/actions";


export default function AddTodo({addHandler}) {

const [input, setInput] = useState('');

function inputHandler(e) {
  setInput(e.target.value)
}

const dispatch = useDispatch();

const createTodo = (e) => {
  e.preventDefault();
  dispatch(addTodos({
    text: input,
    id: Date.now(),
    completed: false,
  }));
  setInput('')
}

  return (
    <form onSubmit={createTodo} style={{maxWidth: '36rem', margin: "5px auto"}} className="center">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Add new todo</label>
        <input name="newTodo" type="text" onChange={inputHandler} value={input} className="form-control" id="exampleInputTodo" />
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}
