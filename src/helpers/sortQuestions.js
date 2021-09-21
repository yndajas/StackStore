import { sortAnswersWithQuestion } from "./sortAnswers";
import { sortTagsWithQuestion } from "./sortTags";

export const sortQuestions = (questions) => {
  return questions
    .sort((a, b) => parseInt(b.answer_count) - parseInt(a.answer_count))
    .sort((a, b) => parseInt(b.score) - parseInt(a.score))
    .map((sortedQuestion) =>
      sortTagsWithQuestion(sortAnswersWithQuestion(sortedQuestion))
    );
};
