export const formatTags = (tags) => {
  return tags.map((tag) => tag.text).join(", ");
};
