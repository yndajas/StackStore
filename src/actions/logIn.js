import { getBackendUrl } from "../helpers/getBackendUrl";

export const logIn = (data, register) => {
  const endpoint = [register ? "users" : "sessions"];

  return (dispatch) => {
    fetch(`${getBackendUrl()}/${endpoint}`, {
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
          dispatch({ type: "LOG_IN", payload: json.user });
        }
      });
  };
};
