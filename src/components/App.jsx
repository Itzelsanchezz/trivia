import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  return (
    <div className="app">
      Trivia! <Question />{" "}
    </div>
  );
  var currentQuestion = 0;
}

// What is a Question Properties? Answers, Question
// What Components Make up the Question? Anwser
// What States are part of the question?  Unanswered/Answered
function Question(props) {
  return <div>this is a question</div>;
}

export default App;
