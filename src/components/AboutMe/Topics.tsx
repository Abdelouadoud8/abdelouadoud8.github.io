import { FC } from "react";
import { Card, InputProps } from "reactstrap";

interface Props extends InputProps {
  title: string;
}

const Topics: FC<Props> = ({ title, children }) => {
  return (
    <div className="about__topics--topiccontent">
      <h1>{title}</h1>
      <Card className="about__topics--topiccontent-diviser"></Card>
      <div>{children}</div>
    </div>
  );
};

export default Topics;
