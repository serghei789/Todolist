import { useEffect, useState } from "react"


export default function AddTodo({addHandler}) {

const [input, setInput] = useState('');

function inputHandler(e) {
  setInput(e.target.value)
}

function submitHandler(e) {
  e.preventDefault()
  if (input.trim()) {
    addHandler(input.trim());
    setInput('');
  }
  
}

  return (
    <form onSubmit={submitHandler} style={{maxWidth: '36rem', margin: "5px auto"}} className="center">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Add new todo</label>
        <input name="newTodo" type="text" onChange={inputHandler} value={input} className="form-control" id="exampleInputTodo" />
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}
