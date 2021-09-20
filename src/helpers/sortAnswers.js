export const sortAnswers = (question) => {
  if (question.answers) {
    const sortedAnswers = question.answers.sort((a, b) => {
      if (a.accepted) {
        return -1;
      } else if (b.accepted) {
        return 1;
      } else {
        return parseInt(b.score) - parseInt(a.score);
      }
    });

    return { ...question, answers: sortedAnswers };
  } else {
    return question;
  }
};
