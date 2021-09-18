export const searchQuestions = (query) => {
  return (dispatch) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
    fetch(
      `https://api.stackexchange.com/2.3/search?page=1&pagesize=20&order=desc&sort=activity&intitle=${query}&site=stackoverflow&filter=!SBqKECKMLIB-ijOvJS9H1*qxQqh7Evi_6BCJ0xoAl1DWJn*5.(Ks-p).sR*s9M_*`
    )
      .then((response) => response.json())
      .then((json) => {
        const sortedItems = json.items
          .sort((a, b) => parseInt(b.answer_count) - parseInt(a.answer_count))
          .sort((a, b) => parseInt(b.score) - parseInt(a.score))
          .map((sortedItem) => {
            if (sortedItem.answers) {
              const sortedAnswers = sortedItem.answers.sort((a, b) => {
                if (a.is_accepted) {
                  return -1;
                } else if (b.is_accepted) {
                  return 1;
                } else {
                  return parseInt(b.score) - parseInt(a.score);
                }
              });

              return { ...sortedItem, answers: sortedAnswers };
            } else {
              return sortedItem;
            }
          });

        dispatch({
          type: "SEARCH_QUESTIONS",
          payload: { ...json, items: sortedItems },
        });
      });
  };
};
