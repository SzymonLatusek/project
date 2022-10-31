import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import IAppShell from './components/IAppShell';
import Login from './views/Login';
import Registration from './views/Registration';
import SubjectInfo from './views/Subjects';

export function App() {
  const roleDB = 0;
  return (
    <Router>
        <Routes>
          {
            roleDB === 0 &&
            <>
              <Route path={'/'} element={<IAppShell role={roleDB} contain={<div>main</div>} />} />
              <Route path={'login'} element={<IAppShell role={roleDB} contain={<Login />} />}/>
              <Route path={'register'} element={<IAppShell role={roleDB} contain={<Registration />} />} />
            </>
          }

          {
            roleDB === 1 &&
            <>
              <Route path={'/'} element={<IAppShell role={roleDB} contain={<div>main</div>} />} />
              <Route path={'subjects'} element={<IAppShell role={roleDB} contain={<div>subject</div>} />} />
              <Route path={'subject/:name'} element={<IAppShell role={roleDB} contain={<SubjectInfo />} />}/>

              <Route path={'rooms'} element={<IAppShell role={roleDB} contain={<div>room</div>} />} />
              <Route path={'room/:name'} element={<IAppShell role={roleDB} contain={<div>room info</div>} />} />

              <Route path={'departments'} element={<IAppShell role={roleDB} contain={<div>departaments</div>} />} />
              <Route path={'department/:name'} element={<IAppShell role={roleDB} contain={<div>departaments info JB</div>} />} />

              <Route path={'myaccount'} element={<IAppShell role={roleDB} contain={<div>my account</div>} />} />
              <Route path={'assigment/request'} element={<IAppShell role={roleDB} contain={<div>assigment request</div>} />} />
              <Route path={'assigment/accept'} element={<IAppShell role={roleDB} contain={<div>assigment accept</div>} />} />
            </>
          }

          {
            roleDB === 2 &&
            <>
              <Route path={'/'} element={<IAppShell role={roleDB} contain={<div>main</div>} />} />
              <Route path={'/edit-users'} element={<IAppShell role={roleDB} contain={<div>edyyt</div>} />} />
            </>
          }
    
          <Route path={'*'} element={<div><p>Podana strona nie istnieje</p></div>} />


        </Routes>
      </Router>

  );
}

export default App;
