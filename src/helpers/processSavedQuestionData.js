import { rekeySavedQuestionData } from "./rekeySavedQuestionData";
import { sortAnswers } from "./sortAnswers";
import { sortTags } from "./sortTags";

export const processSavedQuestionData = (json) => {
  const rekeyedQuestion = rekeySavedQuestionData(
    json.data,
    json.included || []
  );

  return sortTags(sortAnswers(rekeyedQuestion));
};
