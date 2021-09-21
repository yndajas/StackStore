import QuestionCard from "../QuestionCard";

const SavedQuestionsAccordion = ({ questions }) => {
  return (
    <>
      <div id="accordion">
        {questions.map((question) => (
          <QuestionCard question={question} type={"saved"} />
        ))}
      </div>
      <br />
      <p>
        <i>
          * add/edit notes and tags, update question and answer data or delete
          the question
        </i>
      </p>
    </>
  );
};

export default SavedQuestionsAccordion;
