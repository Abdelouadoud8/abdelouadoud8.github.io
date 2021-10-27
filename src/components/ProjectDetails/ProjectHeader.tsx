import { FC } from "react";
import { InputProps } from "reactstrap";

interface Props extends InputProps {
  role: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const ProjectHeader: FC<Props> = ({ role, title, subtitle, description }) => {
  return (
    <div className="projectdetails__header">
      <span className="projectdetails__header-role">{role}</span>
      <h1 className="projectdetails__header-title">{title}</h1>
      <p className="projectdetails__header-subtitle">{subtitle}</p>
      <p className="projectdetails__header-description">{description}</p>
    </div>
  );
};

export default ProjectHeader;
