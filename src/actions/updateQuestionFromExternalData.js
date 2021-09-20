import { rekeyExternalQuestionData } from "../helpers/rekeyExternalQuestionData";
import { sortAnswers } from "../helpers/sortAnswers";
import { updateQuestion } from "./updateQuestion";

export const updateQuestionFromExternalData = (user, question) => {
  return (dispatch) => {
    fetch(
      `https://api.stackexchange.com/2.3/questions/${question.stack_id}?order=desc&sort=activity&site=stackoverflow&filter=!FyMx1JbYiY93N3*4)4pJ0SHrESnSXd7e0oDq2L`
    )
      .then((response) => response.json())
      .then((json) => {
        const rekeyedQuestion = rekeyExternalQuestionData(json.items[0]);

        const processedQuestion = sortAnswers(rekeyedQuestion);

        processedQuestion.id = question.id;

        dispatch(updateQuestion(user, processedQuestion));
      });
  };
};
