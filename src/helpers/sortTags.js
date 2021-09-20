export const sortTags = (question) => {
  if (question.tags) {
    const sortedTags = question.tags.sort((a, b) => {
      if (a.text < b.text) {
        return -1;
      } else {
        return 1;
      }
    });

    return { ...question, tags: sortedTags };
  } else {
    return question;
  }
};
