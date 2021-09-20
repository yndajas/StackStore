import { sortAnswers } from "./sortAnswers";

export const sortQuestions = (questions) => {
  return questions
    .sort((a, b) => parseInt(b.answer_count) - parseInt(a.answer_count))
    .sort((a, b) => parseInt(b.score) - parseInt(a.score))
    .map((sortedItem) => sortAnswers(sortedItem));
};
