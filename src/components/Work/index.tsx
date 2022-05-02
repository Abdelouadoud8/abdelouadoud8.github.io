import { FC } from "react";
import MyProjects from "./MyProjects";

const Work: FC = () => {
  return (
    <div className="work">
      <div className="work__header">
        <img src="/img/mypicture.jpeg" alt="" />
        <span>Hi, I’m Abdelouadoud 🤙</span>
        <p>
          I’m a UI/UX designer & front-end developer focused on building brands
          and digital experiences - Currently 4th year computer science student
        </p>
      </div>
      <MyProjects />
      <div className="work__clients">
        <h1>Clients</h1>
        <div className="work__clients-logos">
          <img id="logo1" src="/img/logos/NxtNow.png" alt="" />
          <img id="logo2" src="/img/logos/momyz.svg" alt="" />
          <img id="logo3" src="/img/logos/objectifDeck.png" alt="" />
          <img id="logo4" src="/img/logos/hoskadev.svg" alt="" />
        </div>
      </div>

      <div id="testimonials" className="work__testimonials">
        <h1>Trusted by brands all over the world</h1>
        <div className="work__testimonials-content">
          <img src="img/client1.jpeg" alt="" />
          <div className="work__testimonials-body">
            <span>Abdelouadoud never ceases to amaze me</span>
            <p>
              I worked with abdelouadoud in several projects, he feels like an
              extension of our team. When a project comes up, he is super
              responsive, professional, and just fun to work with. I’m always
              amazed at how he manages to take our rough vision and make
              something beautiful. He makes us look good! Abdelouadoud is also
              skilled at understanding the business case, setting expectations,
              and very patiently managing any edits. He has a true eye for
              design and ensures everything fits within our brand. I’ve
              recommended him to many others!
            </p>
            <div className="work__testimonials-body--person">
              <span className="work__testimonials-body--person-name">
                Azzaz Rahmani Oussama
              </span>
              <span className="work__testimonials-body--person-position">
                FULL-STACK WEB DEVELOPER
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
