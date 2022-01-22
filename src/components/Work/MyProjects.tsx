import { FC } from "react";
import { Link } from "react-router-dom";

const MyProjects: FC = () => {
  return (
    <div className="work__projects">
      <Link to="/medicol">
        <img src="/img/myprojects/uikitmedicol/1.png" alt="" />
      </Link>
      <Link to="/medecinQuiz">
        <img src="/img/myprojects/medecinquiz/1.png" alt="" />
      </Link>


      {/* <Link to="/beachsnowvolleyball">
        <img src="/img/myprojects/beachsnowvolleyball/1.png" alt="" />
      </Link>
      <Link to="/socialmediaapp">
        <img src="/img/myprojects/socialmediaapp/1.png" alt="" />{" "}
      </Link>
      <Link to="/gamingpackagewebsite">
        <img src="/img/myprojects/gamespackages/1.png" alt="" />
      </Link> */}
    </div>
  );
};

export default MyProjects;
