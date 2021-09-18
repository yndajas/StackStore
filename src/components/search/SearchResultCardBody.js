import QuestionData from "../QuestionData";
import AnswerData from "../AnswerData";

const SearchResultCardBody = ({ question }) => {
  return (
    <div className="card-body">
      <QuestionData question={question} />
      <h3>Answers</h3>
      {question.answers
        ? question.answers.map((answer, index) => (
            <>
              <AnswerData answer={answer} />
              {index < question.answers.length - 1 ? <hr /> : ""}
            </>
          ))
        : "No answers"}
      {/* button to save question (use Stack question_id and package the data from the search results state object corresponding to that ID) */}
    </div>
  );
};

export default SearchResultCardBody;
