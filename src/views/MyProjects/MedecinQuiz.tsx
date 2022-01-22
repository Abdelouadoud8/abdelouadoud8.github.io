/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import Topics from "../../components/AboutMe/Topics";
import Footer from "../../components/Foote";
import ProjectDetails from "../../components/ProjectDetails";

const MedecinQuiz: FC = () => {
  return (
    <div className="projectdetails__pageform">
      <ProjectDetails
        picture={"/img/myprojects/medecinquiz/1.png"}
        role={"UI/UX designer"}
        title={"Medecin Quiz Web App"}
        subtitle={"Revise your lessons, try exams and rock your studies"}
        description={
          "Medecin Quiz is a web application dedicated for dental students, it contains all years modules including lectures and exams which allows student to revise and prepare their exams, the plateform provide an essaie version before paying to unlock all exams and content."
        }
        topic1={
          <Topics title={"Date & agency"}>
            <p>December 2021 - January 2022</p>
            <p>Blue Dental Clinic</p>
          </Topics>
        }
        topic2={
          <Topics title={"Role"}>
            <p>UI/UX designer</p>
          </Topics>
        }
        topic3={
          <Topics title={" & deliverable"}>
            <p>
              Mobile UI kit, customizable components, pre-made layouts, figma
              source file.
            </p>{" "}
          </Topics>
        }
        topic4={
          <Topics title={"Prototype"}>
            <a href="#" target="_blank" rel="noreferrer">
              <p>Test live prototype in figma</p>
            </a>
          </Topics>
        }
      >
        <span className="projectdetails__contentdetails--number">01</span>
        <h1>The challenge</h1>
        <h2>Why we did this work?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The company offers an educational system and she decided to automate
          it by creating a solution that allows student to revise or even test
          their capacities before the real exam and always keep track of their
          progress, and here our web app comes as a solution!
        </p>
        <img src="/img/myprojects/medecinquiz/1.png" alt="" id="beforetitle" />
        <span className="projectdetails__contentdetails--number">02</span>
        <h1>Graphic chart</h1>
        <h2>What about fonts? colors?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          Colors used are some fresh colors that goes with the dental
          environment with the white, and that helps student concentrate while
          scrolling in our plateform. For the fonts, we used mainly the poppins
          font.
        </p>
        <img src="/img/myprojects/medecinquiz/2.png" alt="" />
        <span className="projectdetails__contentdetails--number">03</span>
        <h1>Landing Page</h1>
        <h2>A modern minimalist landing page</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The landing page has been designed to attract the student, showcase
          what the website offers, multiple modules included, pricing, some
          clients testimonials, FAQ and most important why to choose us!
        </p>
        <img src="/img/myprojects/medecinquiz/3.png" alt="" />

        <span className="projectdetails__contentdetails--number">04</span>
        <h1>Login / Sign up</h1>
        <h2>A modern & simple login</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The user has the ability to sign in and sign up to his account and
          also to reset his password.
        </p>
        <img src="/img/myprojects/medecinquiz/3_1.png" alt="" />
        <img src="/img/myprojects/medecinquiz/3_2.png" alt="" />

        <span className="projectdetails__contentdetails--number">05</span>
        <h1>Logged in</h1>
        <h2>User workflow</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The user has a simple and mainn workflow for both revision and exams,
          he either start by choosing a year, then a module then a semester and
          finaly ends up with the exam/lesson lists, or he can access directly
          if he has already marked the exam/lesson in favoris. There are two
          kinds of questions, QCM and long questions, by finishing all questions
          student will get the result of his session with all previous answers.
        </p>
        <img src="/img/myprojects/medecinquiz/4.png" alt="" />
        <img src="/img/myprojects/medecinquiz/5.png" alt="" />
        <img src="/img/myprojects/medecinquiz/6.png" alt="" />
        <img src="/img/myprojects/medecinquiz/7.png" alt="" />
        <img src="/img/myprojects/medecinquiz/8.png" alt="" />
        <img src="/img/myprojects/medecinquiz/9.png" alt="" />
        <img src="/img/myprojects/medecinquiz/11.png" alt="" />
        <img src="/img/myprojects/medecinquiz/12.png" alt="" />
        <img src="/img/myprojects/medecinquiz/10.png" alt="" />
      </ProjectDetails>
      <Footer />
    </div>
  );
};

export default MedecinQuiz;
