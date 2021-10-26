import { FC } from "react";
import { Card } from "reactstrap";

const Topics: FC = () => {
  return (
    <div className="about__topics--topiccontent">
      <h1>education</h1>
      <Card className="about__topics--topiccontent-diviser"></Card>
      <div>
        <span>Higher National School Of Computer Science</span>
        <p>Bachelor of Business Administration, June 2021</p>
      </div>
    </div>
  );
};

export default Topics;
