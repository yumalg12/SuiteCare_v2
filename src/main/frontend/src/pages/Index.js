import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "../component/Index/Header";
import Footer from "../component/Index/Footer";
import About from "../component/Index/About";
import Contact from "../component/Index/Contact";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      indexData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getIndexData() {
    $.ajax({
      url: "./indexData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ indexData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getIndexData();
  }

  render() {
    return (
      <div className="Index">
        <Header data={this.state.indexData.main} />
        <About data={this.state.indexData.about} />
        <Contact data={this.state.indexData.main} />
        <Footer data={this.state.indexData.main} />
        
        <Routes>
            <Route path="/suitefamily/login" element={<FamilyLogin/>} />
            <Route path="/suitemate/login" element={<MateLogin/>} />
        </Routes>
      </div>
    );
  }
}

export default Index;
