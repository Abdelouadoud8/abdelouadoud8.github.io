import { ComponentProps, FC } from "react";
import { Input, InputProps } from "reactstrap";
import Header from "../Header";
import MyProjects from "../Work/MyProjects";
import ProjectHeader from "./ProjectHeader";

interface Props extends InputProps {
  picture: string;
  role: string;
  title: string;
  subtitle: string;
  description: string;
  topic1?: ComponentProps<typeof Input>["topics"];
  topic2?: ComponentProps<typeof Input>["topics"];
  topic3?: ComponentProps<typeof Input>["topic3"];
  topic4?: ComponentProps<typeof Input>["topic4"];
  topic5?: ComponentProps<typeof Input>["topic5"];
  topic6?: ComponentProps<typeof Input>["topic6"];
}

const ProjectDetails: FC<Props> = ({
  picture,
  children,
  role,
  title,
  subtitle,
  description,
  topic1,
  topic2,
  topic3,
  topic4,
  topic5,
  topic6,
}) => {
  return (
    <div className="projectdetails">
      <Header/>
      <div className="projectdetails__content">
        <ProjectHeader
          role={role}
          title={title}
          subtitle={subtitle}
          description={description}
        />
        <img src={picture} alt="" />
        <div className="projectdetails__topics ">
          {topic1}
          {topic2}
          {topic3}
          {topic4}
          {topic5}
          {topic6}
        </div>
        <div className="projectdetails__contentdetails">{children}</div>
      </div>
      <MyProjects />
    </div>
  );
};

export default ProjectDetails;
