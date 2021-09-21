export const clearTag = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_TAG" });
  };
};
