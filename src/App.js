import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Singup from "./components/pages/Singup";
import Contact from "./components/pages/Contact";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Login" Component={Login} />
          <Route path="/Singup" Component={Singup} />
          <Route path="/Contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
