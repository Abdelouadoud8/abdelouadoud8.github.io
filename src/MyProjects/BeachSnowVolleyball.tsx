import { FC } from "react";
import Topics from "../components/AboutMe/Topics";
import Footer from "../components/Foote";
import ProjectDetails from "../components/ProjectDetails";

const BeachSnowVolleyball: FC = () => {
  return (
    <div className="projectdetails__pageform">
      <ProjectDetails
        picture={"/img/myprojects/beachsnowvolleyball/1.png"}
        role={"UI/UX designer"}
        title={"Beach & Snow Volleyball"}
        subtitle={
          "A fresh re-design for french beach & snow volleyball website"
        }
        description={
          "A website related with a mobile application for a new fresh design of the official french beach & snow volley website, this was a design for a client participating in a competition for the best re-design for the website, and hopefully the client was completely satisfied and that helped him win the prize."
        }
        topic1={
          <Topics title={"Date"}>
            <p>July - August 2020</p>
          </Topics>
        }
        topic2={
          <Topics title={"Role"}>
            <p>UI/UX designer</p>
          </Topics>
        }
        topic3={
          <Topics title={"Plateforms"}>
            <p>Both web and mobile</p>
          </Topics>
        }
        // topic4={
        //   <Topics title={"Links"}>
        //     <a
        //       href="https://www.instagram.com/abdelouadoud.8"
        //       target="_blank"
        //       rel="noreferrer"
        //     >
        //       <p>Medicol mobile application</p>
        //     </a>
        //   </Topics>
        // }
        topic5={
          <Topics title={"Deliverables"}>
            <p>
              Web app design, mobile app design, iPhone 11 Pro mockups,
              Wireframes, prototype, figma source file.
            </p>
          </Topics>
        }
        // topic6={
        //   <Topics title={"Team"}>
        //     <span>Front-end developer</span>
        //     <p>Mahdaoui Abdelouadoud</p>
        //   </Topics>
        // }
      >
        <span className="projectdetails__contentdetails--number">01</span>
        <h1>The challenge</h1>
        <h2>Why we did this work?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          My client was participating in a competition for the best re-design of
          the official french beach & snow volleyball website, he asked me to do
          the work following the same graphic chart. The main vision is to make
          a modern and clean website and reinforce it with a mobile application
          containing pretty much the same content.
        </p>
        <img
          src="/img/myprojects/beachsnowvolleyball/1.png"
          alt=""
          id="beforetitle"
        />
        <span className="projectdetails__contentdetails--number">02</span>
        <h1>Graphic chart</h1>
        <h2>What about fonts? colors?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          We used the same font and colors for both mobile and web versions to
          keep the consistency of course, for the font we used a mix of the
          Inter and Sarala nter and for their decoration that goes with the
          theme and their consistency together, for the colors, they were
          provided by the client regarding the colors of the old website design.
        </p>
        <img src="/img/myprojects/beachsnowvolleyball/2.png" alt="" />
        <span className="projectdetails__contentdetails--number">03</span>
        <h1>UI screens & parts</h1>
        <h2>What does the work includes?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The work includes generally all the information and actuality about
          both beach & snow volleyball including tournaments, leagues, players,
          media and even a shop section, every section is detailled for ex.
          every player with all his statistics, each leagues with ranking and
          tables...
        </p>
        <img src="/img/myprojects/beachsnowvolleyball/3.png" alt="" />
        <img src="/img/myprojects/beachsnowvolleyball/4.png" alt="" />
        <img src="/img/myprojects/beachsnowvolleyball/5.png" alt="" />
        <img src="/img/myprojects/beachsnowvolleyball/6.png" alt="" />
        <img src="/img/myprojects/beachsnowvolleyball/7.png" alt="" />
      </ProjectDetails>
      <Footer />
    </div>
  );
};

export default BeachSnowVolleyball;
