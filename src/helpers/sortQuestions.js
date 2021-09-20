import { sortAnswers } from "./sortAnswers";
import { sortTags } from "./sortTags";

export const sortQuestions = (questions) => {
  return questions
    .sort((a, b) => parseInt(b.answer_count) - parseInt(a.answer_count))
    .sort((a, b) => parseInt(b.score) - parseInt(a.score))
    .map((sortedQuestion) => sortTags(sortAnswers(sortedQuestion)));
};
