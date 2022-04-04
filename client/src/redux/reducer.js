import * as actionTypes from './actionTypes'

function getId(state){
  if(!state.length) return 1;
  return state[state.length-1].id + 1;
  /**
   * {
   * title: 'title',
   * body: 'body',
   * id: 4
   * }
   */
}

export default function reducer(state=[], action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, { ...action.payload, id: getId(state) }];

    case actionTypes.EDIT_TODO:
      return state.map(el => el.id === action.payload.id ? action.payload : el);

    case actionTypes.DELETE_TODO:
      return state.filter(el => el.id !== action.payload )

    case actionTypes.DO_DONE:
      return state.map(el => el.id === action.payload ? {...el, completed: !el.completed} : el)

    default:
      return state;
  }
}
