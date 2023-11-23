import React, { Component } from "react";
import Slide from "react-reveal";

class About extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const about = this.props.data.about.map(function (about) {
      return (
        <div key={about.title}>
          <h3>{about.title}</h3>
          <p>{about.description}</p>
        </div>
      );
    });

    const advantages = this.props.data.advantages.map(function (advantages) {
      return (
        <div key={advantages.title}>
          <h3>{advantages.title}</h3>
          <p>{advantages.description}</p>
        </div>
      );
    });

    return (
      <section id="about">
        <Slide left duration={1300}>
          <div className="row about">
            <div className="three columns header-col">
              <h1>
                <span>스위트케어는?</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{about}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row advantages">
            <div className="three columns header-col">
              <h1>
                <span>장점</span>
              </h1>
            </div>

            <div className="nine columns main-col">{advantages}</div>
          </div>
        </Slide>

      </section>
    );
  }
}

export default About;
