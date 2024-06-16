import React from 'react';
import quiz from '../images/quiz.jpg';
import i from '../images/i.jpg';


const FullScreenPrompt = ({ onEnableFullScreen }) => {
  return (
    <div className="fullscreen-prompt">
        <h2>Welcome to the Quiz!</h2>
      <h2>Please enable full-screen mode to continue</h2>
      <button onClick={onEnableFullScreen}>Enable Full Screen</button>
    </div>
  );
};

export default FullScreenPrompt;
