import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import OpenRoute from "../src/components/core/homepage/Auth/OpenRoute"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/homepage/Auth/PrivateRoute";
import Error from "./pages/Error"
function App() {
  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

    <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />  

      <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />  

    <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />  

    <Route
          path="about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        />  
        <Route path="/contact" element={<Contact/>}/>

        <Route
          element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }
          >
            <Route path="dashboard/my-profile" element={<MyProfile/>}/>
            {/*<Route path="dashboard/settings" element={<Setting/>}*/} 
            </Route>     

        <Route path ="*" element ={<Error/>}/>


    </Routes>

   </div>
  );
}

export default App;
