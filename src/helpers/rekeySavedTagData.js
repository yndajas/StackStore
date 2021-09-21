export const rekeySavedTagData = (tag) => {
  return { id: tag.id, ...tag.attributes };
};
