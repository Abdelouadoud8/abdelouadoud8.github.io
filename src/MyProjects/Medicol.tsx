import { FC } from "react";
import Topics from "../components/AboutMe/Topics";
import Footer from "../components/Foote";
import ProjectDetails from "../components/ProjectDetails";

const Medicol: FC = () => {
  return (
    <div className="projectdetails__pageform">
      <ProjectDetails
        picture={"/img/medicol/1.png"}
        role={"UI/UX designer"}
        title={"Medicol mobile UI kit"}
        subtitle={
          "Sapien cursus posuere porttitor velit sapien, rhoncus sit ut ullamcorper."
        }
        description={
          "Purus quis blandit at pulvinar aliquam a. Ipsum consectetur odio vel in pulvinar in eget. Commodo massa eget ipsum, commodo. Adipiscing viverra malesuada imperdiet sit id. A nunc scelerisque pellentesque lectus ullamcorper. Elementum pharetra aliquam vulputate nibh id turpis elementum vitae. Elit blandit cras tellus non ipsum leo. Quis ultrices elit pellentesque cras sit vitae arcu mattis. Sit sed faucibus suspendisse tortor sagittis, amet."
        }
        topic1={
          <Topics title={"Date"}>
            <p>October - December 2021</p>
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
              Brand Identity, Website, Wayfinding, Summit Collateral, Deck
              Template, Environmental Graphics
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
        <h1>- All screens -</h1>
        <h2>Home page</h2>
        <p className="projectdetails__contentdetails--paragraph">
          Vel lacus dolor nulla elit eros. Ornare quam purus viverra praesent
          lacinia erat vitae. Nulla aliquet mi ornare nibh venenatis, etiam.
          Interdum quam gravida consectetur diam. Odio pretium eget tristique
          sed. Ullamcorper elit adipiscing dolor nisi ut. Lectus commodo amet
          dui, id amet ac ac massa. Sed malesuada nunc orci metus, massa, donec
          nulla. A, velit ultricies quis orci ultrices nibh fermentum. Tristique
          dolor cursus adipiscing pretium eu, nam. Proin adipiscing amet, odio
          orci felis natoque nec.
        </p>
        <img src="/img/medicol/2.png" alt="" />
        <img src="/img/medicol/3.png" alt="" />
        <img src="/img/medicol/4.png" alt="" />
        <img src="/img/medicol/5.png" alt="" />

      </ProjectDetails>
      <Footer />
    </div>
  );
};

export default Medicol;
