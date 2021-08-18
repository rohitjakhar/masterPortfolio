import React, { Component } from "react";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Projects from "../projects/Projects";
import ContactComponent from "../contact/ContactComponent";

class Home extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Projects theme={this.props.theme} />
        <ContactComponent theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
