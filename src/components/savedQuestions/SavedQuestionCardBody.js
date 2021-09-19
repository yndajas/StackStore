import QuestionData from "../QuestionData";
import NotesContainer from "../../containers/main/NotesContainer";
import QuestionTagsContainer from "../../containers/main/QuestionTagsContainer";
import AnswerData from "../AnswerData";

const SavedQuestionCardBody = ({ question }) => {
  return (
    <div className="card-body">
      <QuestionData question={question} />
      {/* route/switch/if for notes: add button/show with edit button/edit form */}
      <NotesContainer question={question} />
      {/* route/switch/if for tags: add button/show with edit button/edit with comma-separated tags and save button */}
      <QuestionTagsContainer question={question} />
      <h3>Answers</h3>
      {question.answers
        ? question.answers.map((answer, index) => (
            <>
              <AnswerData answer={answer} />
              {/* answer notes */}
              {index < question.answers.length - 1 ? <hr /> : ""}
            </>
          ))
        : "No answers"}
      {/* update question and answer from Stack Overflow button */}
      {/* delete button */}
    </div>
  );
};

export default SavedQuestionCardBody;
