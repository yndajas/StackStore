import { getBackendUrl } from "../helpers/getBackendUrl";
import { processSavedQuestionsData } from "../helpers/processSavedQuestionsData";

export const fetchSavedTag = (user, tagSlug) => {
  return (dispatch) => {
    fetch(`${getBackendUrl()}/users/${user.id}/tags/${tagSlug}`, {
      method: "GET",
      headers: {
        token: user.token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          window.alert(json.error);
        } else {
          dispatch({ type: "SET_TAG", payload: json.tag });

          const processedQuestions = processSavedQuestionsData(json);

          dispatch({
            type: "FETCH_SAVED_QUESTIONS",
            payload: processedQuestions,
          });
        }
      });
  };
};
