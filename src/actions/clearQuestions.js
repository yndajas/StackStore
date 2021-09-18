export const clearQuestions = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_QUESTIONS" });
  };
};
