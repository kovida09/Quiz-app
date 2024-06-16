// import React from 'react';

// const Quiz = ({ questions, currentQuestion, timeLeft, onAnswer }) => {
//   const question = questions[currentQuestion];

//   if (!question) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="quiz-container">
//       <div className="timer">Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</div>
//       <h2>{question.question}</h2>
//       <ul>
//         {question.choices.map((choice, index) => (
//           <li key={index}>
//             <button onClick={() => onAnswer(choice)}>{choice}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Quiz;
import React, { useEffect } from 'react';

const Quiz = ({ questions, currentQuestion, timeLeft, onAnswer }) => {
  const question = questions[currentQuestion];

  useEffect(() => {
    // Reset scroll position when the component mounts or changes questions
    window.scrollTo(0, 0);
  }, [currentQuestion]);

  const handleChoiceClick = (choice) => {
    onAnswer(choice);
  };

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{question.question}</p>
      <ul>
        {question.choices.map((choice, index) => (
          <li key={index}>
            <button onClick={() => handleChoiceClick(choice)}>{choice}</button>
          </li>
        ))}
      </ul>
      <p>Time left: {timeLeft} seconds</p>
    </div>
  );
};

export default Quiz;

