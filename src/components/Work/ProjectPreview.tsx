import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, InputProps } from "reactstrap";

interface Props extends InputProps {
  imagepath: string;
  title: string;
  role: string;
  projectLink: string;
}

const ProjectPreview: FC<Props> = ({ role, title, imagepath, projectLink }) => {
  return (
    <div className="work__projects-listitem">
      <Link to={projectLink}>
        <img src={imagepath} alt="" />
        <div className="work__projects-listitem--content">
          <h1>{title}</h1>
          <Card className="work__projects-listitem--content-divider"></Card>
          <p>{role}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectPreview;
