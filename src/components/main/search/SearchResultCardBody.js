import QuestionData from "../QuestionData";
import AnswerData from "../AnswerData";
import SaveQuestionButton from "./SaveQuestionButton";

const SearchResultCardBody = ({ question }) => {
  return (
    <div className="card-body">
      <QuestionData question={question} />
      <hr />
      <h3>Answers</h3>
      {question.answers ? (
        question.answers.map((answer, index) => (
          <>
            <AnswerData answer={answer} />
            {index < question.answers.length - 1 ? <hr /> : ""}
          </>
        ))
      ) : (
        <p>No answers</p>
      )}
      <SaveQuestionButton question={question} />
    </div>
  );
};

export default SearchResultCardBody;
