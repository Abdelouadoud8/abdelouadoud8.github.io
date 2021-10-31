import { FC } from "react";
import { Link } from "react-router-dom";

const MyProjects: FC = () => {
  return (
    <div className="work__projects">
      {/* <Link to="/medicol">
        <Card className="work__projects-listitem work__projects-medicol"></Card>
      </Link>
      <Link to="/beachsnowvolleyball">
        <Card className="work__projects-listitem work__projects-beachsnow"></Card>
      </Link> */}
      <Link to="/medicol">
        <img src="/img/myprojects/uikitmedicol/1.png" alt="" />
      </Link>
      <Link to="/beachsnowvolleyball">
        <img src="/img/myprojects/beachsnowvolleyball/1.png" alt="" />
      </Link>
      <Link to="/socialmediaapp">
        <img src="/img/myprojects/socialmediaapp/1.png" alt="" />{" "}
      </Link>

      <img src="/img/myprojects/musicapp/1.png" alt="" />
      <Link to="/gamingpackagewebsite">
      <img src="/img/myprojects/gamespackages/1.png" alt="" />
      </Link>
      <img src="/img/myprojects/timelinemanagement/1.png" alt="" />
      <img src="/img/myprojects/digitalgrowthsolution/1.png" alt="" />
      <img src="/img/myprojects/carssparesarabic/1.png" alt="" />
      <img src="/img/myprojects/massageapp/1.png" alt="" />
      <img src="/img/myprojects/nitrohosting/1.png" alt="" />
      <img src="/img/myprojects/workspacereservation/1.png" alt="" />
    </div>
  );
};

export default MyProjects;
