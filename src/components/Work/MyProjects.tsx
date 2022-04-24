import { FC, useEffect } from "react";
import ProjectPreview from "./ProjectPreview";
import projects from "../../views/projects";
import { Row } from "reactstrap";

interface Props {
  id?: number;
}

const MyProjects: FC<Props> = ({ id }) => {
  return (
    <Row xs={3} className="work__projects" onClick={ScrollToTop()}>
      {projects.map((data, key) => {
        return (
          <div>
            <ProjectPreview
              projectLink={data.projectLink}
              imagepath={data.cover}
              title={data.title}
              role={data.role}
            ></ProjectPreview>
          </div>
        );
      })}
    </Row>
  );
};

export default MyProjects;

const ScrollToTop: any = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
