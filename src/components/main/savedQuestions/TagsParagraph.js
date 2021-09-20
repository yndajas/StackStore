const TagsParagraph = ({ question }) => {
  return (
    <>
      {question.tags.length > 0 ? (
        <p>
          <b>Tags: </b>
          {question.tags.map((tag) => tag.tag_text).join(", ")}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default TagsParagraph;
