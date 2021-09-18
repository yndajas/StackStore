export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      return {};
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SEARCH_QUESTIONS":
      return {
        ...state,
        searchResults: action.payload.items,
        searchResultsTotal: action.payload.total,
      };
    case "CLEAR_SEARCH":
      const newStateCS = { ...state };
      delete newStateCS.searchQuery;
      delete newStateCS.searchResults;
      delete newStateCS.searchResultsTotal;
      delete newStateCS.savedQuestions;
      return newStateCS;
    case "SAVE_QUESTION":
      if (state.savedQuestions) {
        return {
          ...state,
          savedQuestions: [...state.savedQuestions, action.payload],
        };
      } else {
        return { ...state, savedQuestions: [action.payload] };
      }
    case "FETCH_SAVED_QUESTIONS":
      return { ...state, questions: action.payload };
    case "CLEAR_QUESTIONS":
      const newStateCQ = { ...state };
      delete newStateCQ.questions;
      return newStateCQ;
    default:
      return state;
  }
}
