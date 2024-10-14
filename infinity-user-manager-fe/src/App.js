import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup'; 
import Login from './components/Login';    
import Dashboard from './components/Dashboard'; 
import Unauthorized from './components/Unauthorized';
import ProtectRoute from './components/ProtectRoute';
import UserManager from './components/UserManager';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import NonAuthRoute from './components/NonAuthRoute';
import ProjectManager from './components/ProjectManager';
import AddProject from './components/AddProject';
import UpdateProject from './components/UpdateProject';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<NonAuthRoute><Login /></NonAuthRoute>}/>
          
          <Route
            path="/dashboard"
            element={
              <ProtectRoute roles={['Admin']}>
                <Dashboard />
              </ProtectRoute>
            }
          >
            <Route path="usermanager" element={<UserManager />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="updateuser/:id" element={<UpdateUser />} />
            <Route path="projectmanager" element={<ProjectManager />} />
            <Route path="addproject" element={<AddProject />} />
            <Route path="updateproject/:id" element={<UpdateProject />} />
          </Route>
          <Route path="/unauthorized" element={<Unauthorized/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
