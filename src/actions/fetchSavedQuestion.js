import { getBackendUrl } from "../helpers/getBackendUrl";
import { processSavedQuestionData } from "../helpers/processSavedQuestionData";

export const fetchSavedQuestion = (user, questionId) => {
  return (dispatch) => {
    fetch(`${getBackendUrl()}/users/${user.id}/questions/${questionId}`, {
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
          const processedQuestion = processSavedQuestionData(json);

          dispatch({
            type: "FETCH_SAVED_QUESTION",
            payload: processedQuestion,
          });
        }
      });
  };
};
