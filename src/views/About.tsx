import React, { FC } from "react";
import { Button, Card } from "reactstrap";
import PersonalInfos from "../components/AboutMe/PersonalInfos";
import Topics from "../components/AboutMe/Topics";
import Footer from "../components/Foote";

const About: FC = () => {
  return (
    <div className="about">
      <PersonalInfos />
      <div className="about__topics">
        <Topics />
        <Topics />
        <Topics />
        <Topics />
      </div>
      <div className="about__topics2 about__topics">
        <Topics />
        <Topics />
      </div>
      <Card className="about__semifooter-diviser"></Card>
      <div className="about__semifooter-content">
        <div className="about__semifooter-contentspec">
          <div className="about__semifooter-element">
            <h1>Connect</h1>
            <a
              href="https://www.instagram.com/abdelouadoud.8/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdelouadoud-mahdaoui/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Linkedin</span>
            </a>
            <a
              href="https://twitter.com/AbdElWadoud_8"
              target="_blank"
              rel="noreferrer"
            >
              <span>Twitter</span>
            </a>
          </div>
          <div className="about__semifooter-element">
            <h1>Contact</h1>
            <span>+213 549260454</span>
            <span>abdelouadoud.mahdaoui@gmail.com</span>
          </div>
        </div>
        <Button>Get in touch</Button>
      </div>
      <Footer />
    </div>
  );
};

export default About;
