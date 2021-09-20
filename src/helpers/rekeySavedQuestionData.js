const rekeySavedAnswerData = (answerData) => {
  return {
    id: answerData.id,
    ...answerData.attributes,
    stack_created: Date.parse(answerData.attributes.stack_created),
    stack_updated: Date.parse(answerData.attributes.stack_updated),
  };
};

const rekeySavedTagData = (questionTagData) => {
  return { id: questionTagData.id, ...questionTagData.attributes };
};

export const rekeySavedQuestionData = (question, allIncluded) => {
  const included = allIncluded.filter(
    (includedData) =>
      includedData.attributes.question_id === parseInt(question.id)
  );

  const answers = included
    .filter((includedData) => includedData.type === "answer")
    .map((answer) => rekeySavedAnswerData(answer));

  const tags = included
    .filter((includedData) => includedData.type === "question_tag")
    .map((question_tag) => rekeySavedTagData(question_tag));

  const questionData = {
    id: question.id,
    ...question.attributes,
    stack_created: Date.parse(question.attributes.stack_created),
    stack_updated: Date.parse(question.attributes.stack_updated),
    answers: answers,
    tags: tags,
  };

  delete questionData.user_id;

  return questionData;
};
