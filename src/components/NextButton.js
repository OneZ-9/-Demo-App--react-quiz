function NextButton({ dispatch, answer, index, numQuestions }) {
  const isFinished = numQuestions === index + 1;

  if (answer === null) return null;

  if (isFinished)
    return (
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "finish",
          })
        }
      >
        Finish
      </button>
    );

  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({
          type: "nextQuestion",
        })
      }
    >
      Next
    </button>
  );
}

export default NextButton;
