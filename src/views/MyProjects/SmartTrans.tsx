/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import Topics from "../../components/AboutMe/Topics";
import Footer from "../../components/Foote";
import ProjectDetails from "../../components/ProjectDetails";

const SmartTrans: FC = () => {
  return (
    <div className="projectdetails__pageform">
      <ProjectDetails
        picture={"/img/myprojects/smarttrans/1.png"}
        role={"UI/UX designer"}
        title={"SmartTrans Mobile app"}
        subtitle={"Complete your transactions in seconds with one click!"}
        description={
          "SmartTrans is a mobile application made a special big banking company to manage all their transactions between their offices around the world and automate all their system."
        }
        topic1={
          <Topics title={"Date & agency"}>
            <p>October - December 2021</p>
            <p>Hoskadev company</p>
          </Topics>
        }
        topic2={
          <Topics title={"Role"}>
            <p>UI/UX designer</p>
          </Topics>
        }
        topic3={
          <Topics title={"deliverable"}>
            <p>
              Mobile UI design, iPhone 11 Pro mockups, complete prototype and
              figma source file.
            </p>{" "}
          </Topics>
        }
        topic4={
          <Topics title={"play & apple store"}>
            <a href="#" target="_blank" rel="noreferrer">
              <p>Apple Store</p>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <p>Play Store</p>
            </a>
          </Topics>
        }
      >
        <span className="projectdetails__contentdetails--number">01</span>
        <h1>The challenge</h1>
        <h2>Why we did this work?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          This mobile app is made for a big banking company that has been using
          papers and cash money for so long and decided to automate their system
          by automating the transactions, reports and customer support and here
          SmartTrans comes as the solution with complete banking system
          management customized regarding the company's needs. The company is
          based in middle east, so the application was designed in two different
          languages, both arabic and english.
        </p>
        <img src="/img/myprojects/smarttrans/1.png" alt="" id="beforetitle" />
        <span className="projectdetails__contentdetails--number">02</span>
        <h1>Graphic chart</h1>
        <h2>What about fonts? colors?</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The colors are choosed regarding the company's identity and logos to
          keep consistancy and branding. For the typography, for the english
          version we used the Poppins and for the arabic the choice was on IBM
          Plex Sans Arabic.
        </p>
        <img src="/img/myprojects/smarttrans/2.png" alt="" />
        <span className="projectdetails__contentdetails--number">03</span>
        <h1>UI/UX design & screens</h1>
        <h2>A modern minimalist UI</h2>
        <p className="projectdetails__contentdetails--paragraph">
          The application UI was inspired from PAYSERA mobile app, <br /> In
          general, the app consists on banking transactions and exchanges by
          offering 6 main functionnalities between offices and also between
          customers (deposit, withdrawal, remittances, reports, currency
          exchange and inventory), and here we can see each part in details.
        </p>
        <img src="/img/myprojects/smarttrans/3.png" alt="" />
        <img src="/img/myprojects/smarttrans/4.png" alt="" />
        <img src="/img/myprojects/smarttrans/5.png" alt="" />
        <img src="/img/myprojects/smarttrans/6.png" alt="" />
        <img src="/img/myprojects/smarttrans/7.png" alt="" />
      </ProjectDetails>
      <Footer />
    </div>
  );
};

export default SmartTrans;
