import { FC } from "react";
import Topics from "../../components/AboutMe/Topics";
import Footer from "../../components/Foote";
import ProjectDetails from "../../components/ProjectDetails";

const GamingPackages: FC = () => {
  return (
    <div className="projectdetails__pageform">
      <ProjectDetails
        picture={"/img/myprojects/gamespackages/1.png"}
        role={"UI/UX designer"}
        title={"Gaming Packages & stream Website"}
        subtitle={"Get your best game packages and live the streaming"}
        description={
          "A website destinated to gamers and people interested in gaming & streaming packages allows the user to purchase their favorite game's packages with a marketplace full of customizable packages and components related with games & streaming modes ."
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
            <p>Web design</p>
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
            <p>Web app design, Wireframes, prototype, figma source file.</p>
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
          The client was searching for a solution to upload customizable and
          pre-made packages for multiple use (gaming, streaming...), attracting
          more gamers to purchase them by providing a simple marketplace that
          showcase all products.
        </p>
        <img
          src="/img/myprojects/gamespackages/1.png"
          alt=""
          id="beforetitle"
        />
        <span className="projectdetails__contentdetails--number">02</span>
        <h1>Graphic chart</h1>
        <h2>What about fonts? colors?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          For our colors, we used a fresh yellow combined with a dark-gray as
          main colors, and a light blue as secondary color. The colors are
          inspired for giving the idea of joy and activity. For the fonts, we
          combined the Inter and Sarala fonts to put some consistency.
        </p>
        <img src="/img/myprojects/gamespackages/2.png" alt="" />
        <span className="projectdetails__contentdetails--number">03</span>
        <h1>UI screens & parts</h1>
        <h2>What does the work includes?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The work includes a landing page with multiples sections to showcase
          the companies services and also attract the user's to their products,
          it also includes a marketplace for showcasinng products and a page for
          each product details and orders.
        </p>
        <img src="/img/myprojects/gamespackages/3.png" alt="" />
        <img src="/img/myprojects/gamespackages/4.png" alt="" />
        <img src="/img/myprojects/gamespackages/5.png" alt="" />
      </ProjectDetails>
      <Footer />
    </div>
  );
};

export default GamingPackages;
