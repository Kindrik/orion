import React from 'react';
import './App.css';
import { JokeComponent } from './components/jokeComponent';

function App() {
  return (
    <div className="App">
      <JokeComponent mainTitle="Jokes List" />
    </div>
  );
}

export default App;
