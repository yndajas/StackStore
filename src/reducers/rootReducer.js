export default function rootReducer(state = {}, action) {
  switch (action.type) {
    // sessions
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      return {};
    // search
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
    // saved questions
    case "FETCH_SAVED_QUESTIONS":
      return { ...state, questions: action.payload };
    case "CLEAR_QUESTIONS":
      const newStateCQs = { ...state };
      delete newStateCQs.questions;
      return newStateCQs;
    // saved question
    case "FETCH_SAVED_QUESTION": // fall through
    case "UPDATE_QUESTION":
      return { ...state, question: action.payload };
    case "DELETE_QUESTION":
      return { ...state, question: { ...state.question, deleted: true } };
    case "CLEAR_QUESTION":
      const newStateCQ = { ...state };
      delete newStateCQ.question;
      return newStateCQ;
    // saved tags
    case "FETCH_SAVED_TAGS":
      return { ...state, tags: action.payload };
    case "CLEAR_TAGS":
      const newStateCTs = { ...state };
      delete newStateCTs.tags;
      return newStateCTs;
    // saved questions by tag
    case "SET_TAG":
      return { ...state, tag: action.payload };
    case "CLEAR_TAG":
      const newStateCT = { ...state };
      delete newStateCT.tag;
      return newStateCT;
    default:
      return state;
  }
}
