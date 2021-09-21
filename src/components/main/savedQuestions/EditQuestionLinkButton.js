import { Link } from "react-router-dom";

const EditQuestionLinkButton = ({ question }) => {
  return (
    <Link to={`/questions/${question.id}/edit`}>
      <button name="edit-question" className="btn btn-primary">
        Edit question*
      </button>
    </Link>
  );
};

export default EditQuestionLinkButton;
