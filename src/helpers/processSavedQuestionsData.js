import { rekeySavedQuestionData } from "./rekeySavedQuestionData";
import { sortQuestions } from "./sortQuestions";

export const processSavedQuestionsData = (json) => {
  const rekeyedQuestions = json.data.map((question) =>
    rekeySavedQuestionData(question, json.included || [])
  );

  return sortQuestions(rekeyedQuestions);
};
