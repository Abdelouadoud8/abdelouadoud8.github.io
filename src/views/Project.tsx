import { FC } from "react";
import Topics from "../components/AboutMe/Topics";
import Footer from "../components/Foote";
import ProjectDetails from "../components/ProjectDetails";
import projects from "./projects";

interface Props {
  id?: number;
}

const Project: FC<Props> = ({ id }) => {
  return (
    <div className="projectdetails__pageform">
      {projects.map((data, key) => {
        if (data.id === id) {
          return (
            <ProjectDetails
              picture={data.cover}
              role={data.role}
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
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
                    Mobile UI kit, customizable components, pre-made layouts,
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
              {data.sections.map((item) => (
                <>
                  <img src="" alt="" />
                  <span className="projectdetails__contentdetails--number">
                    {item.id}
                  </span>
                  <h1>{item.title}</h1>
                  <h2>{item.subtitle}</h2>
                  <p className="projectdetails__contentdetails--paragraph">
                    {item.description}
                  </p>
                  {item.images.map((myimage) => (
                    <img src={myimage} alt="" />
                  ))}
                </>
              ))}
            </ProjectDetails>
          );
        }
      })}
      <Footer />
    </div>
  );
};

export default Project;
