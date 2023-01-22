import React from "react"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../signup/Signup";
import Dashboard from "../dashboard/Dashboard";
import Login from "../login/Login";
import PrivateRoute from "../privateroute/PrivateRoute";
import ForgotPassword from "../forgotpassword/ForgotPassword";
import UpdateProfile from "../updateprofile/UpdateProfile";
import './app.css';

function App() {
  return (
      <div className="app">
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
              </Routes>
            </AuthProvider>
          </Router>
      </div>
  )
}

export default App;
