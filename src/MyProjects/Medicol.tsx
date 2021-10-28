import { FC } from "react";
import Topics from "../components/AboutMe/Topics";
import Footer from "../components/Foote";
import ProjectDetails from "../components/ProjectDetails";

const Medicol: FC = () => {
  return (
    <div className="projectdetails__pageform">
      <ProjectDetails
        picture={"/img/myprojects/uikitmedicol/1.png"}
        role={"UI/UX designer"}
        title={"Medicol mobile UI kit"}
        subtitle={"Control your medical life & health from your home"}
        description={
          "Medicol is a mobile application dedicated to all users that want to control their medical life including their medical folders, appointments with doctors, access to all pharmacies and also a space for exchange with doctors and people. If you are a dad or a mom, Medicol allows you to follow your son's vaccination and the follow-up with his doctor"
        }
        topic1={
          <Topics title={"Date"}>
            <p>May - Juin 2021</p>
          </Topics>
        }
        topic2={
          <Topics title={"Role"}>
            <p>UI/UX designer</p>
          </Topics>
        }
        topic3={
          <Topics title={"Agency"}>
            <p>Medicol SAS</p>
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
              Mobile UI kit, customizable components, pre-made layouts, figma
              source file.
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
        <h2>Why we did this UI kit?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          There are thousands of new medical applications and the number is
          increasing everyday, there lot of developers and designers that need a
          creative and attractive design with a good UX, but they don't have
          enough time to make a design from scratch, here our UI kit comes to
          help with various components, screens and layouts.
        </p>
        <img src="/img/myprojects/uikitmedicol/2.png" alt="" id="beforetitle" />
        <span className="projectdetails__contentdetails--number">02</span>
        <h1>The sollution</h1>
        <h2>How we resolved the problem?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          This UI kit helps the designers to get a modern design in a short time
          by providing more than 50 pre-made components, +36 customisable
          screens and also a high organized layouts.
        </p>
        <img src="/img/myprojects/uikitmedicol/3.png" alt="" />
        <img src="/img/myprojects/uikitmedicol/4.png" alt="" />
        <img src="/img/myprojects/uikitmedicol/5.png" alt="" />
        <span className="projectdetails__contentdetails--number">03</span>
        <h1>UI screens & parts</h1>
        <h2>What does the UI kit includes?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The UI kit includes 6 main parts organized "welcome and
          authentification", "Doctors, appointments & pharmacies", "Medical
          folder", "chat", "BLog & discussion space", "Fitness & body", all
          parts are high organized and consistent by providing various choices
          with quality design.
        </p>
        <img src="/img/myprojects/uikitmedicol/7.png" alt="" />
        <img src="/img/myprojects/uikitmedicol/8.png" alt="" />
        <img src="/img/myprojects/uikitmedicol/6.png" alt="" />
      </ProjectDetails>
      <Footer />
    </div>
  );
};

export default Medicol;
