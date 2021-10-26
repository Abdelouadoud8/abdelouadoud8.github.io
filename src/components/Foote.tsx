import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="footer">
      <p>
        Mahdaoui Abdelouadoud 2021 | Designer |
        <span> abdelouadoud.mahdaoui@gmail.com</span>
      </p>
      <div className="footer-socialmedia">
        <img src="/img/instagram.svg" alt="" />
        <img src="/img/linkedin.svg" alt="" />
        <img src="/img/github.svg" alt="" />
        <img src="/img/twitter.svg" alt="" />
        <img src="/img/gmail.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
