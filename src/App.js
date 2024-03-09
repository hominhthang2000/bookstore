import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Singup from "./components/pages/Singup";
import Contact from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import ShoppingGuide from "./components/pages/ShoppingGuide";
import Guarantee from "./components/pages/Guarantee";
import Refund from "./components/pages/Refund";
import Productss from "./components/pages/Productss";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Login" Component={Login} />
          <Route path="/Singup" Component={Singup} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/PrivacyPolicy" Component={PrivacyPolicy} />
          Guarantee
          <Route path="/ShoppingGuide" Component={ShoppingGuide} />
          <Route path="/Guarantee" Component={Guarantee} />
          <Route path="/Refund" Component={Refund} />
          <Route path="/Productss" Component={Productss} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
