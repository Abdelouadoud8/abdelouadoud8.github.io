import { FC } from "react";
import Topics from "../../components/AboutMe/Topics";
import Footer from "../../components/Foote";
import ProjectDetails from "../../components/ProjectDetails";

const SocialMediaApp: FC = () => {
  return (
    <div className="projectdetails__pageform">
      <ProjectDetails
        picture={"/img/myprojects/socialmediaapp/1.png"}
        role={"UI/UX designer"}
        title={"Social Media Application"}
        subtitle={"Expend your network, make new relations"}
        description={
          "A social media application that helps people make new relations with people and extend their network with a cool theme that help the user having a funny and relaxinng experience."
        }
        topic1={
          <Topics title={"Date"}>
            <p>April 2021</p>
          </Topics>
        }
        topic2={
          <Topics title={"Role"}>
            <p>UI/UX designer</p>
          </Topics>
        }
        topic3={
          <Topics title={"Plateforms"}>
            <p>Destinated for mobile "android & iOS"</p>
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
              Mobile app design, iPhone 11 Pro mockups, Wireframes, prototype,
              figma source file.
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
          The client was searching for a solution to make people interact more
          with others and push them to make new friendships, know new people and
          the most important is enjoying their time while doing thi. In another
          side, the solution has to be made in a modern way that attract people
          and gives an idea about the daily improvement of the world.
        </p>
        <img
          src="/img/myprojects/socialmediaapp/1.png"
          alt=""
          id="beforetitle"
        />
        <span className="projectdetails__contentdetails--number">02</span>
        <h1>Graohic chart</h1>
        <h2>What about fonts? colors?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          For our colors, we used fresh modern colors that sends the idea of joy
          and love, the design includes both light and dark versions, the colors
          choice was completely based on the idea of giving the user the sense
          of love and more emotions that impacts him and help spreading love
          among people.
        </p>
        <img src="/img/myprojects/socialmediaapp/5.png" alt="" />
        <img src="/img/myprojects/socialmediaapp/6.png" alt="" />
        <span className="projectdetails__contentdetails--number">03</span>
        <h1>UI screens & parts</h1>
        <h2>What does the work includes?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          As mentioned before the application is available in both light & dark
          modes, by openinng it you will face a simple login and sigup pages,
          after signing up you will get into the home page where you can find
          people, like them and share your interests, the profiles are displayed
          inn an attractive way that allows users to know others, like them and
          even contacting them throw a chat section, the user has the ability to
          edit and customize their profiles.
        </p>
        <img src="/img/myprojects/socialmediaapp/2.png" alt="" />
        <img src="/img/myprojects/socialmediaapp/3.png" alt="" />
        <img src="/img/myprojects/socialmediaapp/4.png" alt="" />
        <img src="/img/myprojects/socialmediaapp/6.png" alt="" />
        <img src="/img/myprojects/socialmediaapp/7.png" alt="" />
        <img src="/img/myprojects/socialmediaapp/8.png" alt="" />
      </ProjectDetails>
      <Footer />
    </div>
  );
};

export default SocialMediaApp;
