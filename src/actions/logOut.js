export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: "LOG_OUT" });
  };
};
