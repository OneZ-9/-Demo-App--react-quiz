import Options from "./Options";

function Question({ currentQuestion }) {
  console.log(currentQuestion);
  return (
    <div>
      <h4>{currentQuestion.question}</h4>
      <Options currentQuestion={currentQuestion} />
    </div>
  );
}

export default Question;
