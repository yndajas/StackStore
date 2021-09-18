import { formatDate } from "../helpers/formatDate";

const QuestionData = ({ question }) => {
  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: question.body,
        }}
      />
      <p>----</p>
      <p>
        Score: {question.score}
        <br />
        Last activity: {formatDate(question.stack_updated, "stack")}
        <br />
        Created: {formatDate(question.stack_created, "stack")}
        <br />
        <a
          href={`https://stackoverflow.com/q/${question.id}`}
          title="View question on Stack Overflow"
        >
          View question on Stack Overflow
        </a>
      </p>
    </div>
  );
};

export default QuestionData;
