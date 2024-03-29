import React from "react"
import './app.css';
import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../signup/Signup";
import Dashboard from "../dashboard/Dashboard";
import Login from "../login/Login";
import PrivateRoute from "../privateroute/PrivateRoute";
import ForgotPassword from "../forgotpassword/ForgotPassword";
import UpdateProfile from "../updateprofile/UpdateProfile";
import EditForm from "../editform/EditForm";

function App() {
  return (
      <div className="app">
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
                <Route path="/edit-form" element={<PrivateRoute><EditForm/></PrivateRoute>}/>
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
