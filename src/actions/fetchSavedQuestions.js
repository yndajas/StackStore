import { getBackendUrl } from "../helpers/getBackendUrl";
import { rekeySavedQuestionData } from "../helpers/rekeySavedQuestionData";
import { sortQuestions } from "../helpers/sortQuestions";

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
          const rekeyedQuestions = json.data.map((question) =>
            rekeySavedQuestionData(question, json.included || [])
          );

          const processedQuestions = sortQuestions(rekeyedQuestions);

          dispatch({
            type: "FETCH_SAVED_QUESTIONS",
            payload: processedQuestions,
          });
        }
      });
  };
};
