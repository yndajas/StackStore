import { rekeyExternalQuestionData } from "../helpers/rekeyExternalQuestionData";
import { sortQuestions } from "../helpers/sortQuestions";

export const searchQuestions = (query) => {
  return (dispatch) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
    fetch(
      `https://api.stackexchange.com/2.3/search?page=1&pagesize=20&order=desc&sort=activity&intitle=${query}&site=stackoverflow&filter=!SBqKECKMLIB-ijOvJS9H1*qxQqh7Evi_6BCJ0xoAl1DWJn*5.(Ks-p).sR*s9M_*`
    )
      .then((response) => response.json())
      .then((json) => {
        const rekeyedQuestions = json.items.map((question) =>
          rekeyExternalQuestionData(question)
        );

        const processedQuestions = sortQuestions(rekeyedQuestions);

        dispatch({
          type: "SEARCH_QUESTIONS",
          payload: { ...json, items: processedQuestions },
        });
      });
  };
};
