import React, { Component } from "react";
import Fade from "react-reveal";
import findMate from "../../assets/img/icon/candidate.png";
import findWork from "../../assets/img/icon/employee-engagement.png";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const suiteFamily = this.props.data.suiteFamily;
    const suiteMate = this.props.data.suiteMate;
    const title = this.props.data.title;
    const description = this.props.data.description;

    return (
      <header id="home">

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{title}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="index-btn">
                <a href={suiteFamily} className="button btn suiteFamily-btn">
                  <img src={findMate}/>
                  <h2>간병 신청하기</h2>
                </a>
                <a href={suiteMate} className="button btn suiteMate-btn">
                  <img src={findWork}/>
                  <h2>간병 일감 찾기</h2>
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>

      </header>
    );

    
  }
}

export default Header;
