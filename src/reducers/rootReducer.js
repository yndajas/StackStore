export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      const newState = { ...state };
      delete newState.user;
      return newState;
    default:
      return state;
  }
}
