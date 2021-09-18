export const formatDate = (date, type) => {
  const dateForFormatting = type === "stack" ? date * 1000 : date;
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(
    dateForFormatting
  );
};
