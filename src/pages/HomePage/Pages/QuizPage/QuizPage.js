// Quiz.js
import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../../../../firebase";
import "./Quiz.css";

const questions = [
  {
    question: "Which of the following is not a programming language?",
    options: ["Python", "HTML", "C++", "Java"],
    answer: "HTML",
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Process Unit",
      "Central Processing Unit",
      "Control Process Unit",
      "Compute Processing Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which data structure uses FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
  },
  {
    question: "What is the output of 2 + '2' in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    answer: "22",
  },
  {
    question: "Which one is a valid relational database?",
    options: ["MongoDB", "Oracle", "Neo4j", "Redis"],
    answer: "Oracle",
  },
  {
    question: "What is an operating system?",
    options: [
      "Application software",
      "Hardware",
      "System software",
      "Programming language",
    ],
    answer: "System software",
  },
  {
    question: "In C, which loop checks condition at the end?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while",
  },
  {
    question: "Which is used for styling HTML pages?",
    options: ["JavaScript", "CSS", "PHP", "SQL"],
    answer: "CSS",
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
      saveResult(score);
    }
  };

  const saveResult = (finalScore) => {
    const quizRef = ref(database, "quizResults");
    push(quizRef, {
      score: finalScore,
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="quiz-container">
      {!finished ? (
        <>
          <h2>
            Question {current + 1} of {questions.length}
          </h2>
          <h3>{questions[current].question}</h3>
          <div className="options">
            {questions[current].options.map((opt) => {
              let className = "option-btn";
              if (showAnswer) {
                if (opt === questions[current].answer) {
                  className += " correct";
                } else if (opt === selected) {
                  className += " wrong";
                }
              } else if (selected === opt) {
                className += " selected";
              }
              return (
                <button
                  key={opt}
                  className={className}
                  onClick={() => handleSelect(opt)}
                  disabled={showAnswer}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={!showAnswer}
          >
            {current + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </>
      ) : (
        <div className="result-container">
          <h2>🎉 Quiz Completed!</h2>
          <p>
            Your Score: <strong>{score}</strong> out of {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
