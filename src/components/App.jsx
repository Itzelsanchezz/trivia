import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var currentQuestion = 1;
  console.log(data[currentQuestion].question.text);
  return (
    <div className="app">
      Trivia! <Question question={data[currentQuestion].question.text} />
    </div>
  );
}

// What is a Question Properties? Answers, Question
// What Components Make up the Question? Anwser
// What States are part of the question?  Unanswered/Answered
function Question(props) {
  return <div>{props.question}</div>;
}

export default App;
