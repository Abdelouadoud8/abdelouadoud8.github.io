import { FC } from "react";
import { Card } from "reactstrap";
import PersonalInfos from "../components/AboutMe/PersonalInfos";
import Topics from "../components/AboutMe/Topics";
import Footer from "../components/Foote";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";

const About: FC = () => {
  return (
    <div className="about">
      <Header />
      <PersonalInfos />
      <Card className="about__topics-diviser"></Card>
      <div className="about__topics">
        <Topics title="education">
          <span>Technicum Ahmed Zabana</span>
          <p>Baccalaureate science, June 2021</p>
          <span>Higher national school of computer science Sidi Bel Abbes</span>
          <p>Computer science student , Expected June 2023</p>
          <span>French Cultural Center - Campus france</span>
          <p>TCF - SO, Level B2 - October 2019</p>
        </Topics>
        <Topics title="experience">
          <span>Junior UI/UX designer - Hoskadev</span>
          <p>September 2021 - Today</p>
          <span>UI/UX designer - Freelance</span>
          <p>April 2020 - August 2021 </p>
        </Topics>
        <Topics title="skills">
          <span>Design</span>
          <p>
            Branding + Identity, UI/UX, Art Direction, Motion Design, Concept
            Development, Typography, Design Thinking, Design Research, Creative
            Strategy.
          </p>
          <span>Development</span>
          <p>Web & Mobile front-end development, Oriented solution.</p>
        </Topics>
        <Topics title="technical skills">
          <span>Design</span>
          <p>
            Figma, Adobe XD, Sketch, Photoshop, Illustrator, InDesign,
            Lightroom, After Effects.
          </p>
          <span>Development</span>
          <p>
            JavaScript, TypeScript, HTML5, CSS3, Sass, Bootstrap, Reactjs, React
            Native, Git&Github, MySQL.
          </p>
          <span>Office automation</span>
          <p>Microsoft Office, LaTeX</p>
        </Topics>
        <Topics title="awards">
          <span>MLH - Major league hacking 2018</span>
          <p>2nd place</p>
        </Topics>
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
            <span>+213 559321737</span>
            <span>abdelouadoud.mahdaoui@gmail.com</span>
          </div>
        </div>
        <PrimaryButton
          link="/img/MahdaouiAbdelouadoud_CV.pdf"
          download="MahdaouiAbdelouadoud_CV.pdf"
          text="Download CV"
          target="_blank"
        ></PrimaryButton>
      </div>
      <Footer />
    </div>
  );
};

export default About;
