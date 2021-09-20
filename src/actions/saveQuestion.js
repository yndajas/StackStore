import { getBackendUrl } from "../helpers/getBackendUrl";
import { processSavedQuestionData } from "../helpers/processSavedQuestionData";

export const saveQuestion = (user, question) => {
  return (dispatch) => {
    fetch(`${getBackendUrl()}/users/${user.id}/questions`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: user.token,
      },
      method: "POST",
      body: JSON.stringify(question),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          window.alert(json.error);
        } else {
          const processedQuestion = processSavedQuestionData(json);

          processedQuestion.new = json.new;

          dispatch({ type: "SAVE_QUESTION", payload: processedQuestion });
        }
      });
  };
};
