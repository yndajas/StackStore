import NotesParagraph from "./NotesParagraph";
import TagsParagraph from "./TagsParagraph";
import EditQuestionLinkButton from "./EditQuestionLinkButton";
import QuestionData from "../QuestionData";
import AnswerData from "../AnswerData";

const SavedQuestionCardBody = ({ question }) => {
  return (
    <div className="card-body">
      <NotesParagraph question={question} />
      <TagsParagraph question={question} />
      <EditQuestionLinkButton question={question} />
      <hr />
      <QuestionData question={question} />
      <hr />
      <h3>Answers</h3>
      {question.answers && question.answers.length > 0
        ? question.answers.map((answer, index) => (
            <>
              <AnswerData answer={answer} />
              {index < question.answers.length - 1 ? <hr /> : ""}
            </>
          ))
        : "No answers"}
    </div>
  );
};

export default SavedQuestionCardBody;
