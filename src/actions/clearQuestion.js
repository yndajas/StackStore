export const clearQuestion = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_QUESTION" });
  };
};
