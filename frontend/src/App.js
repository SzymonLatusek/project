import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import IAppShell from './IAppShell';
import SubjectInfo from './Subjects';

export function App() {
  return (
    <Router>
        <Routes>
          <Route path={'/'} element={<IAppShell admin={false} />} >
            <Route path={'subjects'} element={<div></div>} />
            <Route path={'subject/:name'} element={<SubjectInfo />} />

            <Route path={'rooms'} element={<div></div>} />
            <Route path={'room/:name'} element={<div></div>} />

            <Route path={'departments'} element={<div></div>} />
            <Route path={'department/:name'} element={<div></div>} />

            <Route path={'login'} element={<div>login</div>} />
            <Route path={'register'} element={<div></div>} />

            <Route path={'myaccount'} element={<div></div>} />
            <Route path={'assigment/request'} element={<div></div>} />
            <Route path={'assigment/accept'} element={<div></div>} />
          </Route>
          <Route path={'/admin'} element={<IAppShell admin={true} />} >
            <Route path={'edit-users'} element={<div></div>} />
          </Route>
          

          <Route path={'*'} element={<div><p>Podana strona nie istnieje</p></div>} />


        </Routes>
      </Router>

  );
}

export default App;
