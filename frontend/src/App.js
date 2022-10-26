import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Component } from './Component';
import SubjectInfo from './Subjects';

function App() {
  return (
    <Router>
        <Routes>
          <Route path={'/'} element={<Component />} />

          <Route path={'/subjects'} element={<div></div>} />
          <Route path={'/subject/:name'} element={<SubjectInfo />} />

          <Route path={'/rooms'} element={<div></div>} />
          <Route path={'/room/:name'} element={<div></div>} />

          <Route path={'/departments'} element={<div></div>} />
          <Route path={'/department/:name'} element={<div></div>} />

          <Route path={'/login'} element={<div></div>} />
          <Route path={'/register'} element={<div></div>} />

          <Route path={'/myaccount'} element={<div></div>} />
          <Route path={'/assigment/request'} element={<div></div>} />
          <Route path={'/assigment/accept'} element={<div></div>} />

          <Route path={'/edit-users'} element={<div></div>} />

          <Route path={'*'} element={<div><p>Podana strona nie istnieje</p></div>} />


        </Routes>
      </Router>

  );
}

export default App;
