function Options({ currentQuestion }) {
  return (
    <div className="options">
      {currentQuestion.options.map((option) => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
