export const logIn = (data, register) => {
  const endpoint = [register ? "users" : "sessions"];

  return (dispatch) => {
    // need to set the base URL below to the API URL - set this somewhere?
    fetch(`http://localhost:3000/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          window.alert(json.error);
        } else {
          dispatch({ type: "LOG_IN", payload: user });
        }
      });
  };
};
