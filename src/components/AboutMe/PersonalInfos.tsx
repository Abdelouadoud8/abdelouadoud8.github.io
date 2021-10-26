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
          I'm Abdelouadoud Mahdaoui, 20 years old, 4th year (2CS) computer
          science student at ESI-SBA. I'm an expert UI/UX designer, I worked on
          +40 professional project (including wireframing - prototyping annd UI)
          using both Figma & Adobe XD. I also work on graphic design. I work as
          a front-end developer using Reactjs.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfos;
