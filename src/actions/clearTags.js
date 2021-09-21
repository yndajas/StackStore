export const clearTags = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_TAGS" });
  };
};
