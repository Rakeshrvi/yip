
import React from 'react';
import PitchDeck from './pages/PitchDeck';

const App: React.FC = () => {
  return (
    <div className="presentation-container">
      <div className="slide-frame">
        <PitchDeck />
      </div>
    </div>
  );
};

export default App;
