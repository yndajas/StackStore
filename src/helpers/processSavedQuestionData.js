import { rekeySavedQuestionData } from "./rekeySavedQuestionData";
import { sortAnswersWithQuestion } from "./sortAnswers";
import { sortTagsWithQuestion } from "./sortTags";

export const processSavedQuestionData = (json) => {
  const rekeyedQuestion = rekeySavedQuestionData(
    json.data,
    json.included || []
  );

  return sortTagsWithQuestion(sortAnswersWithQuestion(rekeyedQuestion));
};
