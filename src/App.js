import React from 'react';

import Tutorial from './components/Tutorial';
import Heading from './components/Heading';

import './appStyles.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tutorial />
      </header>
      <Heading image="build" text="Build" />
      <Heading image="paint" text="Paint" />
      <Heading image="play" text="Play" />
    </div>
  );
}

export default App;
