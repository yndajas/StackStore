import React from "react";

const AnswerData = ({ answer }) => {
  return (
    <div>
      <p>{answer.body}</p>
      <h4>Stack meta</h4>
      <a
        href={`https://stackoverflow.com/a/${answer.stack_id}`}
        title="View answer on Stack Overflow"
      >
        View answer on Stack Overflow
      </a>
      <p>
        Created: {answer.stack_created}
        <br />
        Updated: {answer.stack_updated}
        <br />
        Score: {answer.score}
        <br />
        Accepted: {answer.accepted ? "yes" : "no"}
      </p>
    </div>
  );
};

export default AnswerData;
