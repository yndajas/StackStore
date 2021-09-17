import React from "react";

const QuestionData = ({ question }) => {
  return (
    <div>
      <p>{question.body}</p>
      <h4>Stack meta</h4>
      <a
        href={`https://stackoverflow.com/q/${question.stack_id}`}
        title="View question on Stack Overflow"
      >
        View question on Stack Overflow
      </a>
      <p>
        Created: {question.stack_created}
        <br />
        Updated: {question.stack_updated}
        <br />
        Score: {question.score}
      </p>
      {/* update data button */}
    </div>
  );
};

export default QuestionData;
