import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import IAppShell from './IAppShell';
import SubjectInfo from './Subjects';

export function App() {
  return (
    <Router>
        <Routes>
          <Route path={'/'} element={<IAppShell admin={false} contain={<div>main</div>} />} />
          <Route path={'subjects'} element={<IAppShell admin={false} contain={<div>subject</div>} />} />
          <Route path={'subject/:name'} element={<IAppShell admin={false} contain={<SubjectInfo />} />}/>

          <Route path={'rooms'} element={<IAppShell admin={false} contain={<div>room</div>} />} />
          <Route path={'room/:name'} element={<IAppShell admin={false} contain={<div>room info</div>} />} />

          <Route path={'departments'} element={<IAppShell admin={false} contain={<div>departaments</div>} />} />
          <Route path={'department/:name'} element={<IAppShell admin={false} contain={<div>departaments info JB</div>} />} />

          <Route path={'login'} element={<IAppShell admin={false} contain={<div>login</div>} />}/>
          <Route path={'register'} element={<IAppShell admin={false} contain={<div>register</div>} />} />

          <Route path={'myaccount'} element={<IAppShell admin={false} contain={<div>my account</div>} />} />
          <Route path={'assigment/request'} element={<IAppShell admin={false} contain={<div>assigment request</div>} />} />
          <Route path={'assigment/accept'} element={<IAppShell admin={false} contain={<div>assigment accept</div>} />} />


          <Route path={'/admin'} element={<IAppShell admin={true} />} >
            <Route path={'edit-users'} element={<div></div>} />
          </Route>
          

          <Route path={'*'} element={<div><p>Podana strona nie istnieje</p></div>} />


        </Routes>
      </Router>

  );
}

export default App;
