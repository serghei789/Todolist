import * as actionTypes from './actionTypes'

export const addTodos = (todo) => ({
  type: actionTypes.ADD_TODO,
  payload: todo
})

export const editTodos = (todo) => ({
  type: actionTypes.EDIT_TODO,
  payload: todo
})

export const doDone = (id) => ({
  type: actionTypes.DO_DONE,
  payload: id,
})

export const deleteTodo =(id) => ({
  type: actionTypes.DELETE_TODO,
  payload: id
})
