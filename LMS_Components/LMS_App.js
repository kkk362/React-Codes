import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './LMS_Components/Login'
import Dashboard from './LMS_Components/Dashboard'

function LMS_App() {
  return (
  <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Leave Management System
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Sign in
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to={'/dashboard'}>
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/My_Details" element={<My_Details />} />
              <Route path="/My_Manager_Details" element={<My_Manager_Details/>} />
              <Route path="/Apply_Leave" element={<Apply_Leave />} />
              <Route path="/Approve_Deny_Leave" element={<Approve_Deny_Leave />} />
              <Route path="/Pending_Leaves" element={<Pending_Leaves />} />
              <Route path="/Leave_Details" element={<Leave_Details />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default LMS_App;
