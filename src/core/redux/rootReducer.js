export function rootReducer(state, action) {
  let prevState
  let key
  switch (action.type) {
    case 'INPUT_CHANGE':
      prevState = state.inputState || {}
      key = Object.keys(action.data)
      prevState[key] = action.data[key]
      return {...state, inputState: prevState} // id, value
    default: return state
  }
}