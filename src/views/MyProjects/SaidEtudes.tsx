/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import Topics from "../../components/AboutMe/Topics";
import Footer from "../../components/Foote";
import ProjectDetails from "../../components/ProjectDetails";

const SaidEtudes: FC = () => {
  return (
    <div className="projectdetails__pageform">
      <ProjectDetails
        picture={"/img/myprojects/saidetudes/1.png"}
        role={"UI/UX designer"}
        title={"Said Etudes web app"}
        subtitle={"The easiest way to get your studies visa abroad."}
        description={
          "This web application is made to help a company specialized in getting visa and help students get accpeted in other countries, by facilitating the process to the very low level and manage complicated applications."
        }
        topic1={
          <Topics title={"Date & agency"}>
            <p>December 2021 - January 2022</p>
            <p>Said Etudes Dz</p>
          </Topics>
        }
        topic2={
          <Topics title={"Role"}>
            <p>UI/UX designer</p>
          </Topics>
        }
        topic3={
          <Topics title={" & deliverable"}>
            <p>Web application UI and complete prototype.</p>{" "}
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
          After making a huge success, the company decided to change from social
          media and automate their work system, since managing clients throw
          social media is not such a professional way, this is why we made this
          plateform where all agents can work together and also company can keep
          track of all process between students and agents and also process of
          application of students alone.
        </p>
        <img src="/img/myprojects/saidetudes/1.png" alt="" id="beforetitle" />
        <span className="projectdetails__contentdetails--number">02</span>
        <h1>Graphic chart</h1>
        <h2>What about fonts? colors?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          Colors used are some fresh colors that goes with students rang age and
          gives a sence of confidence and trust. For the typography, we used a
          usual font poppins combined with some Inter.
        </p>
        <img src="/img/myprojects/saidetudes/2.png" alt="" />
        <span className="projectdetails__contentdetails--number">03</span>
        <h1>Landing Page</h1>
        <h2>A modern minimalist landing page</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The landing page has been designed to attract the student, showcase
          what the website offers, multiple destinations and programs included,
          pricing, some clients testimonials and also an explanation video.
        </p>
        <img src="/img/myprojects/saidetudes/3.png" alt="" />

        <span className="projectdetails__contentdetails--number">04</span>
        <h1>general view - before login</h1>
        <h2>Giving more options for user</h2>
        <p className="projectdetails__contentdetails--paragraph">
          In this part, any user even without an account can get more
          information about the company, to get their trust and insure
          credibility in addition to multiple ways of contact in case of need
          for more help.
        </p>
        <img src="/img/myprojects/saidetudes/4.png" alt="" />
        <img src="/img/myprojects/saidetudes/5.png" alt="" />

        <span className="projectdetails__contentdetails--number">05</span>
        <h1>Login / Sign up</h1>
        <h2>A modern & simple login</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The user has the ability to sign in and sign up to his account and
          also to reset his password.
        </p>
        <img src="/img/myprojects/saidetudes/6.png" alt="" />
        <img src="/img/myprojects/saidetudes/7.png" alt="" />

        <span className="projectdetails__contentdetails--number">06</span>
        <h1>Logged in</h1>
        <h2>User Side Workflow</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The design include both user and admin side, in the next section, we
          will present the user side workflow including the mail
          functionnalities and path to follow to finish the basic tasks. Main
          goal of the user is to login, find a program and apply for it, after
          finishing the payment, the user will have a chat support from the
          agent until finishing all application process.
        </p>
        <img src="/img/myprojects/saidetudes/8.png" alt="" />
        <img src="/img/myprojects/saidetudes/9.png" alt="" />
        <img src="/img/myprojects/saidetudes/10.png" alt="" />
        <img src="/img/myprojects/saidetudes/11.png" alt="" />
        <img src="/img/myprojects/saidetudes/12.png" alt="" />
        <img src="/img/myprojects/saidetudes/13.png" alt="" />
        <img src="/img/myprojects/saidetudes/14.png" alt="" />
        <img src="/img/myprojects/saidetudes/15.png" alt="" />

        <span className="projectdetails__contentdetails--number">07</span>
        <h1>Logged in</h1>
        <h2>Admin Side</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The admin has the ability to manage all the website by adding/editing
          and removing (country/unniversity/program...), manage users and also
          manage payments and applications. After submitting an application with
          successful payment the agent will take care of the rest of the process
          and keep the student updated.
        </p>
        <img src="/img/myprojects/saidetudes/16.png" alt="" />
        <img src="/img/myprojects/saidetudes/17.png" alt="" />
        <img src="/img/myprojects/saidetudes/18.png" alt="" />
        <img src="/img/myprojects/saidetudes/19.png" alt="" />
        <img src="/img/myprojects/saidetudes/20.png" alt="" />
        <img src="/img/myprojects/saidetudes/21.png" alt="" />
        <img src="/img/myprojects/saidetudes/22.png" alt="" />
      </ProjectDetails>
      <Footer />
    </div>
  );
};

export default SaidEtudes;
