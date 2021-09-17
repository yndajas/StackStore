export const fetchSavedQuestions = (user) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${user.id}/questions`, {
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
          dispatch({ type: "FETCH_SAVED_QUESTIONS", payload: json }); // the payload is likely wrong, or will need sorting out - the questions are likely to be in a key called data, with answers elsewhere; need to console log this to check
        }
      });
  };
};
