import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="footer">
      <p>
        Mahdaoui Abdelouadoud 2021 | Designer |
        <span> abdelouadoud.mahdaoui@gmail.com</span>
      </p>
      <div className="footer-socialmedia">
        <a
          href="https://www.instagram.com/abdelouadoud.8/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/instagram.svg" alt="innstagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdelouadoud-mahdaoui/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/Linkedin.svg" alt="linkedin" />
        </a>
        <a
          href="https://github.com/Abdelouadoud8"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/Github.svg" alt="github" />
        </a>
        <a
          href="https://twitter.com/AbdElWadoud_8"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/Twitter.svg" alt="twitter" />
        </a>
        <a href="/">
          <img src="/img/Gmail.svg" alt="gmail" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
