import { formatTags } from "../../../helpers/formatTags";

const TagsParagraph = ({ question }) => {
  return (
    <>
      {question.tags.length > 0 ? (
        <p>
          <b>Tags: </b>
          {formatTags(question.tags)}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default TagsParagraph;
