import { Link } from "react-router-dom";

const EditQuestionButton = ({ question }) => {
  return (
    <Link to={`/questions/${question.id}/edit`}>
      <button name="edit-question" className="btn btn-primary">
        Edit question*
      </button>
    </Link>
  );
};

export default EditQuestionButton;
