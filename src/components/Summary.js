import React from 'react';
import quiz from '../images/quiz.jpg';
import i from '../images/i.jpg';


const Summary = ({ score, answers, correctAnswers }) => {
  return (
    
    <div className="summary-container">
        
      <h2>Quiz Completed</h2>
    <h2>Your score: {score}</h2>  
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <p>Question: {answer.question}</p>
            <p>Your answer: {answer.answer} - {answer.isCorrect ? 'Correct' : 'Incorrect'}</p>
            {!answer.isCorrect && (
              <p>Correct answer: {correctAnswers[index]}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
