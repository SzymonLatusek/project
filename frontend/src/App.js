import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Component } from './Component';

function App() {
  return (
    <Router>
        <Routes>
          <Route path={'/'} element={<Component />} />
        </Routes>
      </Router>

  );
}

export default App;
