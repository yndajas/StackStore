import { getBackendUrl } from "../helpers/getBackendUrl";

export const deleteQuestion = (user, question) => {
  return (dispatch) => {
    fetch(`${getBackendUrl()}/users/${user.id}/questions/${question.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: user.token,
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          window.alert(json.error);
        } else {
          dispatch({ type: "DELETE_QUESTION" });
        }
      });
  };
};
