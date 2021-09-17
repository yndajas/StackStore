export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      return {};
    case "FETCH_SAVED_QUESTIONS":
      return { ...state, questions: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SEARCH_QUESTIONS":
      return {
        ...state,
        searchResults: action.payload.items,
        searchResultsTotal: action.payload.total,
      };
    case "CLEAR_SEARCH":
      const newState = { ...state };
      delete newState.searchQuery;
      delete newState.searchResults;
      delete newState.searchResultsTotal;
      return newState;
    default:
      return state;
  }
}
