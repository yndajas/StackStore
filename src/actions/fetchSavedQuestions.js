import { getBackendUrl } from "../helpers/getBackendUrl";
import { processSavedQuestionsData } from "../helpers/processSavedQuestionsData";

export const fetchSavedQuestions = (user) => {
  return (dispatch) => {
    fetch(`${getBackendUrl()}/users/${user.id}/questions`, {
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
          const processedQuestions = processSavedQuestionsData(json);

          dispatch({
            type: "FETCH_SAVED_QUESTIONS",
            payload: processedQuestions,
          });
        }
      });
  };
};
