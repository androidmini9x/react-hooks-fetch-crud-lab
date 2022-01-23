import React from "react";

function QuestionItem({ question, onDeleteQuiz }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChange(event) {

    const newAnswer = event.target.value;

    fetch("http://localhost:4000/questions/"+id, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correctIndex: newAnswer
      })
    });
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={() => onDeleteQuiz(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
