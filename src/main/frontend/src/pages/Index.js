import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import Header from "../component/Index/Header";
import Footer from "../component/Index/Footer";
import About from "../component/Index/About";
import Contact from "../component/Index/Contact";
import FamilyLogin from "../pages/Family/Login";
import MateLogin from "../pages/Mate/Login";

const Index = () => {
  const [indexData, setIndexData] = useState({});
  
  useEffect(() => {
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
    getIndexData();
  }, []);

  const getIndexData = async () => {
    try {
      const response = await fetch("./indexData.json");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIndexData(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="Index">
      <StateContext.Provider value={indexData}>
        <Header data={indexData.main} />
        <About data={indexData.about} />
        <Contact data={indexData.main} />
        <Footer data={indexData.main} />
      </StateContext.Provider>

      <Router>
        <Routes>
          <Route path="/suitefamily/login" element={<FamilyLogin />} />
          <Route path="/suitemate/login" element={<MateLogin />} />
        </Routes>
      </Router>
    </div>
  );
};

export const StateContext = createContext();
export default Index;
