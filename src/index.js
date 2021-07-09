import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Slsc } from './slsc';

const App = () => {
  return (
    <Router>
      <Slsc />
    </Router>
  );
};

// you don’t directly call the component function, but instead let React later do it for you
ReactDOM.render(<App />, document.getElementById('slsc'));
