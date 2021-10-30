import React, { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <span>Abdelouadoud.8</span>
      </Link>

      <ul className="header__list">
        <li className="header__list-item">
          <Link to="/" className="header__list-link">
            work
          </Link>
        </li>
        <li className="header__list__item">
          <Link to="/about" className="header__list-link">
            about
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/testimonials" className="header__list-link">
            testimonials
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/contact" className="header__list-link">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
