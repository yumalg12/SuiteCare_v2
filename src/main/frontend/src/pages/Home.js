import React, { useState, useEffect, createContext } from "react";
import ReactGA from "react-ga";
import Header from "../component/Home/Header";
import Footer from "../component/Home/Footer";
import About from "../component/Home/About";
import Contact from "../component/Home/Contact";

const Home = () => {
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
        throw new Error('indexData.json 파일의 경로를 확인하십시오.\n(이 메시지는 추후 변경이 필요함)');
      }
      const data = await response.json();
      setIndexData(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="Home">
      <StateContext.Provider value={indexData}>
        <Header data={indexData.main} />
        <About data={indexData.about} />
        <Contact data={indexData.main} />
        <Footer data={indexData.main} />
      </StateContext.Provider>
    </div>
  );
};

export const StateContext = createContext();
export default Home;
