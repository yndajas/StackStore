export const clearSearch = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_SEARCH" });
  };
};
