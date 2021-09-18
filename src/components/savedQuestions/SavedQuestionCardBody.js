import QuestionData from "../QuestionData";
import NotesContainer from "../../containers/main/NotesContainer";
import TagsContainer from "../../containers/main/TagsContainer";
import AnswerData from "../AnswerData";

const SavedQuestionCardBody = ({ question }) => {
  return (
    <div className="card-body">
      <QuestionData question={question} />
      {/* route/switch/if for notes: add button/show with edit button/edit form */}
      <NotesContainer question={question} />
      {/* route/switch/if for tags: add button/show with remove button or text/edit with comma-separated tags and save button */}
      <TagsContainer question={question} />
      <hr />
      {question.answers
        ? question.answers.map((answer) => (
            <>
              <h3>Answers</h3>
              <AnswerData answer={answer} />
              {/* answer notes */}
            </>
          ))
        : "No answers"}
      {/* update question and answer from Stack Overflow button */}
      {/* delete button */}
    </div>
  );
};

export default SavedQuestionCardBody;
