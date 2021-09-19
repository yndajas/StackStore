import SearchResultCardBody from "./search/SearchResultCardBody";
import SavedQuestionCardBody from "./savedQuestions/SavedQuestionCardBody";

const QuestionCard = ({ question, type }) => {
  return (
    <div className="card">
      <div className="card-header" id={`heading${question.stack_id}`}>
        <button
          className="btn"
          data-toggle="collapse"
          data-target={`#collapse${question.stack_id}`}
          aria-expanded="false"
          aria-controls={`collapse${question.stack_id}`}
          dangerouslySetInnerHTML={{
            __html: question.title,
          }}
        />
      </div>
      <div
        className="collapse"
        id={`collapse${question.stack_id}`}
        aria-labelledby={`heading${question.stack_id}`}
        data-parent="#accordion"
      >
        {type === "search" ? (
          <SearchResultCardBody question={question} />
        ) : (
          <SavedQuestionCardBody question={question} />
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
