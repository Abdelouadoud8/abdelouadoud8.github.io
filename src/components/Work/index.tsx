import { FC } from "react";
import { Col } from "reactstrap";

const Work: FC = () => {
  return (
    <div>
      <div className="work__header">
        <img src="/img/mypicture.jpeg" alt="" />
        <span>Hi, I’m Abdelouadoud 🤙</span>
        <p>
          I’m a UI/UX designer & front-end developer focused on building brands
          and digital experiences - Currently 4th year computer science student
        </p>
      </div>
      <Col md="3">
        <img src="" alt="" />
      </Col>
    </div>
  );
};

export default Work;
