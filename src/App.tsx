import React from 'react';
import Board from './components/Board';
import './App.css';

const App: React.FC = () => {
  const sounds = Array.from({ length: 9 }, (_, i) => `sound${i + 1}.mp3`);

  return (
    <div className="app">
      <Board sounds={sounds} />
    </div>
  );
};

export default App;
