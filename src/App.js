// import React, { useState, useEffect } from 'react';
// import Quiz from './components/Quiz';
// import FullScreenPrompt from './components/FullScreenPrompt';
// import Summary from './components/Summary';
// import questions from './assets/questions.json';

// // Correct answers provided separately
// const correctAnswersList = [
//   "Stack",
//   "O(log n)",
//   "Queue",
//   "AVL Tree",
//   "O(n log n)",
//   "Dijkstra's algorithm",
//   "O(n)",
//   "Stack",
//   "Merge Sort",
//   "O(n)"
// ];

// const App = () => {
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(
//     parseInt(localStorage.getItem('currentQuestion')) || 0
//   );
//   const [timeLeft, setTimeLeft] = useState(
//     parseInt(localStorage.getItem('timeLeft')) || 600
//   );
//   const [score, setScore] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [showSummary, setShowSummary] = useState(false);
//   const [correctAnswers, setCorrectAnswers] = useState(correctAnswersList);

//   useEffect(() => {
//     if (isFullScreen) {
//       const timer = setInterval(() => {
//         setTimeLeft((prev) => {
//           const newTime = prev - 1;
//           if (newTime >= 0) {
//             localStorage.setItem('timeLeft', newTime.toString());
//           } else {
//             clearInterval(timer);
//             setShowSummary(true);
//           }
//           return newTime;
//         });
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [isFullScreen]);

//   useEffect(() => {
//     localStorage.setItem('currentQuestion', currentQuestion.toString());
//   }, [currentQuestion]);

//   const handleFullScreen = () => {
//     if (document.documentElement.requestFullscreen) {
//       document.documentElement.requestFullscreen().then(() => setIsFullScreen(true));
//     } else if (document.documentElement.mozRequestFullScreen) {
//       document.documentElement.mozRequestFullScreen().then(() => setIsFullScreen(true)); // Firefox
//     } else if (document.documentElement.webkitRequestFullscreen) {
//       document.documentElement.webkitRequestFullscreen().then(() => setIsFullScreen(true)); // Chrome, Safari and Opera
//     } else if (document.documentElement.msRequestFullscreen) {
//       document.documentElement.msRequestFullscreen().then(() => setIsFullScreen(true)); // IE/Edge
//     } else {
//       alert("Fullscreen API is not supported by your browser");
//     }
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion((prev) => prev + 1);
//     } else {
//       setShowSummary(true);
//     }
//   };

//   const handleAnswer = (answer) => {
//     const isCorrect = questions[currentQuestion]?.correct === answer;
//     if (isCorrect) {
//       setScore((prev) => prev + 1);
//     }
//     setAnswers((prev) => [...prev, { question: questions[currentQuestion]?.question, answer, isCorrect }]);
//     handleNextQuestion();
//   };

//   return (
//     <div className="App">
//       {isFullScreen ? (
//         showSummary ? (
//           <Summary score={score} answers={answers} correctAnswers={correctAnswers} />
//         ) : (
//           <Quiz
//             questions={questions}
//             currentQuestion={currentQuestion}
//             timeLeft={timeLeft}
//             onAnswer={handleAnswer}
//           />
//         )
//       ) : (
//         <FullScreenPrompt onEnableFullScreen={handleFullScreen} />
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import Quiz from './components/Quiz';
// import FullScreenPrompt from './components/FullScreenPrompt';
// import Summary from './components/Summary';
// import questions from './assets/questions.json';

// // Correct answers provided separately
// const correctAnswersList = [
//   "Stack",
//   "O(log n)",
//   "Queue",
//   "AVL Tree",
//   "O(n log n)",
//   "Dijkstra's algorithm",
//   "O(n)",
//   "Stack",
//   "Merge Sort",
//   "O(n)"
// ];

// const App = () => {
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
//   const [score, setScore] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [showSummary, setShowSummary] = useState(false);

//   useEffect(() => {
//     if (isFullScreen) {
//       const timer = setInterval(() => {
//         setTimeLeft((prev) => {
//           const newTime = prev - 1;
//           if (newTime >= 0) {
//             localStorage.setItem('timeLeft', newTime.toString());
//           } else {
//             clearInterval(timer);
//             setShowSummary(true);
//           }
//           return newTime;
//         });
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [isFullScreen]);

//   useEffect(() => {
//     setCurrentQuestion(parseInt(localStorage.getItem('currentQuestion')) || 0);
//     setTimeLeft(parseInt(localStorage.getItem('timeLeft')) || 600);
//     setScore(parseInt(localStorage.getItem('score')) || 0);
//     setAnswers(JSON.parse(localStorage.getItem('answers')) || []);
//     setShowSummary(false); // Reset summary state
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('currentQuestion', currentQuestion.toString());
//     localStorage.setItem('timeLeft', timeLeft.toString());
//     localStorage.setItem('score', score.toString());
//     localStorage.setItem('answers', JSON.stringify(answers));
//   }, [currentQuestion, timeLeft, score, answers]);

//   const handleFullScreen = () => {
//     if (document.documentElement.requestFullscreen) {
//       document.documentElement.requestFullscreen().then(() => setIsFullScreen(true));
//     } else if (document.documentElement.mozRequestFullScreen) {
//       document.documentElement.mozRequestFullScreen().then(() => setIsFullScreen(true)); // Firefox
//     } else if (document.documentElement.webkitRequestFullscreen) {
//       document.documentElement.webkitRequestFullscreen().then(() => setIsFullScreen(true)); // Chrome, Safari and Opera
//     } else if (document.documentElement.msRequestFullscreen) {
//       document.documentElement.msRequestFullscreen().then(() => setIsFullScreen(true)); // IE/Edge
//     } else {
//       alert("Fullscreen API is not supported by your browser");
//     }
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion((prev) => prev + 1);
//     } else {
//       setShowSummary(true);
//     }
//   };

//   const handleAnswer = (answer) => {
//     const isCorrect = questions[currentQuestion]?.correct === answer;
//     if (isCorrect) {
//       setScore((prev) => prev + 1);
//     }
//     setAnswers((prev) => {
//       const updatedAnswers = [...prev];
//       updatedAnswers[currentQuestion] = { question: questions[currentQuestion]?.question, answer, isCorrect };
//       return updatedAnswers;
//     });
//     handleNextQuestion();
//   };

//   return (
//     <div className="App">
//       {isFullScreen ? (
//         showSummary ? (
//           <Summary score={score} answers={answers} correctAnswers={correctAnswersList} />
//         ) : (
//           <Quiz
//             questions={questions}
//             currentQuestion={currentQuestion}
//             timeLeft={timeLeft}
//             onAnswer={handleAnswer}
//           />
//         )
//       ) : (
//         <FullScreenPrompt onEnableFullScreen={handleFullScreen} />
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import FullScreenPrompt from './components/FullScreenPrompt';
import Summary from './components/Summary';
import questions from './assets/questions.json';
import quiz from './images/quiz.jpg';
import i from './images/i.jpg';

// Correct answers provided separately
const correctAnswersList = [
  "Stack",
  "O(log n)",
  "Queue",
  "AVL Tree",
  "O(n log n)",
  "Dijkstra's algorithm",
  "O(n)",
  "Stack",
  "Merge Sort",
  "O(n)"
];

const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    if (isFullScreen) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          if (newTime >= 0) {
            localStorage.setItem('timeLeft', newTime.toString());
          } else {
            clearInterval(timer);
            setShowSummary(true);
          }
          return newTime;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isFullScreen]);

  useEffect(() => {
    setCurrentQuestion(parseInt(localStorage.getItem('currentQuestion')) || 0);
    setTimeLeft(parseInt(localStorage.getItem('timeLeft')) || 600);
    setScore(parseInt(localStorage.getItem('score')) || 0);
    setAnswers(JSON.parse(localStorage.getItem('answers')) || []);
    setShowSummary(false); // Reset summary state
  }, []);

  useEffect(() => {
    localStorage.setItem('currentQuestion', currentQuestion.toString());
    localStorage.setItem('timeLeft', timeLeft.toString());
    localStorage.setItem('score', score.toString());
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [currentQuestion, timeLeft, score, answers]);

  const handleFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().then(() => setIsFullScreen(true));
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen().then(() => setIsFullScreen(true)); // Firefox
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen().then(() => setIsFullScreen(true)); // Chrome, Safari and Opera
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen().then(() => setIsFullScreen(true)); // IE/Edge
    } else {
      alert("Fullscreen API is not supported by your browser");
    }
  };

  useEffect(() => {
    const checkFullScreen = () => {
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    };

    document.addEventListener('fullscreenchange', checkFullScreen);
    document.addEventListener('webkitfullscreenchange', checkFullScreen);
    document.addEventListener('mozfullscreenchange', checkFullScreen);
    document.addEventListener('MSFullscreenChange', checkFullScreen);

    return () => {
      document.removeEventListener('fullscreenchange', checkFullScreen);
      document.removeEventListener('webkitfullscreenchange', checkFullScreen);
      document.removeEventListener('mozfullscreenchange', checkFullScreen);
      document.removeEventListener('MSFullscreenChange', checkFullScreen);
    };
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleAnswer = (answer) => {
    const isCorrect = questions[currentQuestion]?.correct === answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[currentQuestion] = { question: questions[currentQuestion]?.question, answer, isCorrect };
      return updatedAnswers;
    });
    handleNextQuestion();
  };

  return (
    <div className="App">
      {isFullScreen ? (
        showSummary ? (
          <Summary score={score} answers={answers} correctAnswers={correctAnswersList} />
        ) : (
          <Quiz
            questions={questions}
            currentQuestion={currentQuestion}
            timeLeft={timeLeft}
            onAnswer={handleAnswer}
          />
        )
      ) : (
        <FullScreenPrompt onEnableFullScreen={handleFullScreen} />
      )}
    </div>
  );
};

export default App;

