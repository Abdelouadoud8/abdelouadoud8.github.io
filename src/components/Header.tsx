import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className="header" onClick={ScrollToTop()}>
      <Link to="/" className="header__logo">
        <span>Abdelouadoud8</span>
      </Link>

      <ul className="header__list">
        <li className="header__list-item">
          <Link to="/" className="header__list-link header__list-item3">
            work
          </Link>
        </li>
        <li className="header__list__item">
          <Link to="/about" className="header__list-link">
            about
          </Link>
        </li>
        <li className="header__list-item header__list-item3">
          <Link to="/" className="header__list-link">
            testimonials
          </Link>
        </li>
        <li className="header__list-item header__list-item3">
          <Link to="/about" className="header__list-link">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

const ScrollToTop: any = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
