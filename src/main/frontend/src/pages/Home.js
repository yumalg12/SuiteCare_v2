import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Header from '../component/Home/Header';
import Footer from '../component/Home/Footer';
import About from '../component/Home/About';
import Contact from '../component/Home/Contact';

function Home() {
  const [indexData, setIndexData] = useState({});
  
  useEffect(() => {
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
    getIndexData();
  }, []);

  const getIndexData = async () => {
    try {
      const response = await fetch('./indexData.json');
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
    <div className='Home'>
        <Header />
        <About />
        <Contact />
        <Footer />
    </div>
  );
};

export default Home;
