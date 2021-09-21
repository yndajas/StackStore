export const sortTags = (tags) => {
  return tags.sort((a, b) => {
    if (a.text < b.text) {
      return -1;
    } else {
      return 1;
    }
  });
};

export const sortTagsWithQuestion = (question) => {
  if (question.tags) {
    const sortedTags = sortTags(question.tags);
    return { ...question, tags: sortedTags };
  } else {
    return question;
  }
};
