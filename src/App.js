import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import React from "react";
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={ currentUser ? <Home /> :<Register />} />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single" element={<Single />} />
        
      </Routes>
    </Router>
  );
}

export default App;
