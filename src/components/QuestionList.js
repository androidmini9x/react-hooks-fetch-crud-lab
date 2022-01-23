import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((resp) => resp.json())
    .then((data) => {
      setQuestions(data);
    });
  }, []);

  function deleteQuiz(id) {
    fetch("http://localhost:4000/questions/"+id, {
      method: "DELETE"
    })
    .then((resp) => resp.json())
    .then((data) => {
      setQuestions(questions.filter((quiz) => quiz.id !== id))
    });
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.length > 0 && questions.map(quiz => {
        return <QuestionItem key={quiz.id} question={quiz} onDeleteQuiz={deleteQuiz} />
      })}</ul>
    </section>
  );
}

export default QuestionList;
