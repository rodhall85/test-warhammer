import React from 'react';

import { init } from './components/Analytics';
import Tutorial from './components/Tutorial';
import Heading from './components/Heading';

import './appStyles.module.css';

function App() {
  init();

  return (
    <div className="App">
      <header className="App-header">
        <Tutorial />
      </header>
      <Heading step="build" text="Build" />
      <Heading step="paint" text="Paint" />
      <Heading step="play" text="Play" />
    </div>
  );
}

export default App;
