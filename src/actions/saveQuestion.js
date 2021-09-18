export const saveQuestion = (user, data) => {
  return (dispatch) => {
    // need to set the base URL below to the API URL - set this somewhere?
    fetch(`http://localhost:3000/users/${user.id}/questions`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: user.token,
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          window.alert(json.error);
        } else {
          dispatch({ type: "SAVE_QUESTION", payload: json });
        }
      });
  };
};
