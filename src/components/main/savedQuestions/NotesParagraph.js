const NotesParagraph = ({ question }) => {
  return (
    <>
      {question.notes && question.notes.length > 0 ? (
        <p className="notes">
          <b>Notes</b>
          <br />
          {question.notes}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default NotesParagraph;
