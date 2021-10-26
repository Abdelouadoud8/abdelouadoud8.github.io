import { FC } from "react";

const PersonalInfos: FC = () => {
  return (
    <div className="about__personalinfos">
      <img src="/img/testimonial.png" alt="" />
      <div className="about__personalinfos-body">
        <span>Mahdaoui Abdelouadoud </span>
        <p className="about__personalinfos-body--paragraph1">👋</p>
        <p className="about__personalinfos-body--paragraph2">
          I’m a UI/UX designer & front-end developer focused on building brands
          and digital experiences
        </p>
        <p className="about__personalinfos-body--paragraph3">
          I am specialized in bridging the tenets of brand identity with UX/UI
          to create innovative and impactful design solutions for the modern
          age. Aside from design, I play volleyball, run long distances, watch
          anime, and a big fun of Friends.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfos;
