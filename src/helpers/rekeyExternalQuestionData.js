const rekeyedExternalAnswerData = (externalAnswerData) => {
  return {
    stack_id: externalAnswerData.answer_id,
    stack_question_id: externalAnswerData.question_id,
    accepted: externalAnswerData.is_accepted,
    score: externalAnswerData.score,
    body: externalAnswerData.body,
    stack_created: externalAnswerData.creation_date * 1000,
    stack_updated: externalAnswerData.last_edit_date * 1000 || null,
  };
};

export const rekeyExternalQuestionData = (externalQuestionData) => {
  const answers = externalQuestionData.answers
    ? externalQuestionData.answers.map((answer) =>
        rekeyedExternalAnswerData(answer)
      )
    : null;

  return {
    stack_id: externalQuestionData.question_id,
    score: externalQuestionData.score,
    title: externalQuestionData.title,
    body: externalQuestionData.body,
    stack_created: externalQuestionData.creation_date * 1000,
    stack_updated: externalQuestionData.last_activity_date * 1000,
    answers: answers,
  };
};
