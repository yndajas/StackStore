export const searchQuestions = (query) => {
  return (dispatch) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
    fetch(
      `https://api.stackexchange.com/2.3/search?page=1&pagesize=20&order=desc&sort=activity&intitle=${query}&site=stackoverflow&filter=!*IUCsILPFff.gUR-)krzE*H5D6W-09LURZPSIDyhZgVw)SBYNUyc5Vx16)yTJH`
    )
      .then((response) => response.json())
      .then((json) => dispatch({ type: "SEARCH_QUESTIONS", payload: json }));
  };
};
