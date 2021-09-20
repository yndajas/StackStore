import { getBackendUrl } from "../helpers/getBackendUrl";
import { processSavedQuestionData } from "../helpers/processSavedQuestionData";

export const updateQuestion = (user, question) => {
  return (dispatch) => {
    fetch(`${getBackendUrl()}/users/${user.id}/questions/${question.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: user.token,
      },
      method: "PATCH",
      body: JSON.stringify(question),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          window.alert(json.error);
        } else {
          const processedQuestionData = processSavedQuestionData(json);

          dispatch({ type: "UPDATE_QUESTION", payload: processedQuestionData });
        }
      });
  };
};
