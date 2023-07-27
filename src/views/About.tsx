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
          <span>
            Master 2 in Software Architectures, September 2023 - Present
          </span>
          <p>University of Montpellier - Montpellier, France</p>
          <span>
            Computer science engineer & Master 2, September 2018 - June 2023
          </span>
          <p>
            Higher national school of computer science Sidi Bel Abbes (ESI-SBA)
            - Sidi Bel Abbés, Algeria
          </p>
          <span>Baccalaureate science - June 2018</span>
          <p>Technicum Ahmed Zabana - Blida, Algeria</p>
        </Topics>
        <Topics title="experience">
          <span>Internship, March - August 2023</span>
          <p>
            (LIRMM) Laboratoire d'informatique, de robotique et de
            microélectronique - Montpellier, France
          </p>
          <span>Junior UI/UX designer, July 2022 - Present</span>
          <p>Lasting Dynamics - Las Palmas, Spain</p>
          <span>Junior UI/UX designer, January - Juin 2022</span>
          <p>Hoskadev - Algiers, Algeria</p>
          <span>Internship, September - November 2021 </span>
          <p>Coft Conseil - Algiers, Algeria</p>
        </Topics>
        <Topics title="skills">
          <span>Design</span>
          <p>
            Branding + Identity, UI/UX, Art Direction, Motion Design, Concept
            Development, Typography, Design Thinking, Design Research, Creative
            Strategy.
          </p>
          <span>Development</span>
          <p>Web front-end development, Oriented solution.</p>
        </Topics>
        <Topics title="technical skills">
          <span>Design</span>
          <p>Figma, Adobe XD, Sketch, Photoshop, Illustrator, InDesign.</p>
          <span>Programming languages</span>
          <p>
            JavaScript, TypeScript, Node.js, Java, PHP, Ruby, HTML5, CSS3, Sass,
            Pascal.
          </p>
          <span>Frameworks & Technologies</span>
          <p>
            ReactJs, VueJs, Angular, ExpressJs, SpringBoot, Git & Github, Redux
            toolkit, Ruby on Rails, MySQL, Oracle, Docker, Bootstrap.
          </p>
          <span>Modeling & Concepts</span>
          <p>Design Patterns, UML Modelization, Microservices architectures.</p>
          <span>Office automation</span>
          <p>Microsoft Office, LaTeX</p>
        </Topics>
        <Topics title="certificates">
          <span>TCF-SO (Level C1) - October 2022</span>
          <p>French Cultural Center - Campus france</p>
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
              href="https://github.com/Abdelouadoud8"
              target="_blank"
              rel="noreferrer"
            >
              <span>Github</span>
            </a>
          </div>
          <div className="about__semifooter-element">
            <h1>Contact</h1>
            <span>+33 773471197</span>
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
