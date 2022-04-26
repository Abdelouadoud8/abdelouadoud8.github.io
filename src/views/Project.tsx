import { FC } from "react";
import Topics from "../components/AboutMe/Topics";
import Footer from "../components/Foote";
import Header from "../components/Header";
import ProjectHeader from "../components/ProjectDetails/ProjectHeader";
import MyProjects from "../components/Work/MyProjects";
import projects from "./projects";

interface Props {
  id?: number;
}

const Project: FC<Props> = ({ id, children }) => {
  return (
    <div className="projectdetails__pageform">
      {projects.map((data) => {
        if (data.id === id) {
          return (
            <div className="projectdetails">
              <Header />
              <div className="projectdetails__content">
                <ProjectHeader
                  role={data.role}
                  title={data.title}
                  subtitle={data.subtitle}
                  description={data.description}
                />

                {/* Importing topics */}
                <img src={data.cover} alt="" />
                <div className="projectdetails__topics ">
                  {projects.map((data, key) => {
                    if (data.id === id) {
                      return data.topics.map((item) => (
                        <>
                          <Topics title={item.title}>
                            <p>{item.content}</p>
                          </Topics>
                        </>
                      ));
                    }
                  })}
                </div>
                <div className="projectdetails__contentdetails">
                  {/* Importing project details/content */}
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
                </div>
                <div className="projectdetails__quote">
                  <svg
                    width="84"
                    height="60"
                    viewBox="0 0 84 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M77.373 1.377C76.8222 0.5187 75.87 0 74.8506 0H54C49.0371 0 45 4.0371 45 9V30C45 34.9629 49.0371 39 54 39H59.9562C57.1701 47.0685 54.7911 50.9325 46.875 54.2313C45.5538 54.7821 44.8065 56.1882 45.0879 57.5916C45.369 58.9923 46.5996 60 48.0294 60C48.0324 60 48.0324 60 48.0354 60C64.5501 59.9706 74.0364 53.3496 80.763 37.1661C82.9101 32.0829 84 26.6427 84 21C84 12.3222 81.375 7.5966 77.373 1.377ZM29.8506 0H9C4.0371 0 0 4.0371 0 9V30C0 34.9629 4.0371 39 9 39H14.9562C12.1701 47.0685 9.7911 50.9325 1.875 54.2313C0.5538 54.7821 -0.1935 56.1882 0.0878999 57.5916C0.369 58.9923 1.5996 60 3.0294 60C3.0324 60 3.0324 60 3.0354 60C19.5501 59.9706 29.0364 53.3496 35.763 37.1661C37.9101 32.0829 39 26.6427 39 21C39 12.3222 36.375 7.5966 32.373 1.377C31.8222 0.5187 30.87 0 29.8506 0Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  <p>{data.quote?.description}</p>
                  <span>{data.quote?.person}</span>
                </div>
              </div>

              <MyProjects />
            </div>
          );
        }
      })}
      <Footer />
    </div>
  );
};

export default Project;
