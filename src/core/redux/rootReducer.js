export function rootReducer(state, action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {...state, inputState: action.data} // id, value
    default: return state
  }
}