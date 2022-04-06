import { useEffect } from "react";
import react from "react";
import { Link } from "react-router-dom";

const MyProjects: react.FC = () => {
  return (
    <div className="work__projects" onClick={ScrollToTop()}>
      <Link to="/medicol">
        <img src="/img/myprojects/uikitmedicol/1.png" alt="" />
      </Link>
      <Link to="/medecinQuiz">
        <img src="/img/myprojects/medecinquiz/1.png" alt="" />
      </Link>
      <Link to="/smarttrans">
        <img src="/img/myprojects/smarttrans/1.png" alt="" />
      </Link>
      <Link to="/saidetudes">
        <img src="/img/myprojects/saidetudes/1.png" alt="" />
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

const ScrollToTop: any = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
