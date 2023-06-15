import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </div>
  </Router>
);

export default App;
