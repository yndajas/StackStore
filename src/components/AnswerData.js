import { formatDate } from "../helpers/formatDate";

const AnswerData = ({ answer }) => {
  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: answer.body,
        }}
      />
      <p>----</p>
      <p>
        {answer.accepted ? (
          <>
            <b>Accepted</b>
            <br />
          </>
        ) : (
          ""
        )}
        Score: {answer.score}
        <br />
        {answer.stack_updated ? (
          <>
            Updated: {formatDate(answer.stack_updated, "stack")}
            <br />
          </>
        ) : (
          ""
        )}
        Created: {formatDate(answer.stack_created, "stack")}
        <br />
        <a
          href={`https://stackoverflow.com/a/${answer.stack_id}`}
          title="View answer on Stack Overflow"
        >
          View answer on Stack Overflow
        </a>
      </p>
    </div>
  );
};

export default AnswerData;
