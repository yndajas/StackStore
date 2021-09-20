import { rekeySavedQuestionData } from "./rekeySavedQuestionData";
import { sortAnswers } from "./sortAnswers";

export const processSavedQuestionData = (json) => {
  const rekeyedQuestion = rekeySavedQuestionData(
    json.data,
    json.included || []
  );

  return sortAnswers(rekeyedQuestion);
};
