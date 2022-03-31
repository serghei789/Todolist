export default function Todo({elem, deleteHandler, doneHandler}) {
  
  console.log('elem', elem)

  return(
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={elem.completed ? 'text-decoration-line-through' : ''}>{elem.text}</span>
      <div>
        <button onClick={() => {doneHandler(elem.id)}} className={`btn btn-success`}>{elem.completed ? 'Undone' : 'Done'}</button>
        <button onClick={() => deleteHandler(elem.id)} className="btn btn-danger mx-2">Delete</button>
      </div>
    </li>
  )
}
