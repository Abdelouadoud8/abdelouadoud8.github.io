import { FC } from "react";

const PersonalInfos: FC = () => {
  return (
    <div className="about__personalinfos">
      <img src="/img/testimonial.png" alt="" />
      <div className="about__personalinfos-body">
        <span>Mahdaoui Abdelouadoud </span>
        <p className="about__personalinfos-body--paragraph1">👋</p>
        <p className="about__personalinfos-body--paragraph2">
          As a passionate Software Engineer, I thrive in web development and
          have a strong affinity for UI/UX Design. My eagerness to learn and
          embrace new challenges drives me to tackle real-life user problems and
          deliver seamless user experiences.
        </p>
        <p className="about__personalinfos-body--paragraph3">
          As a specialist in bridging brand identity through the fusion of Web
          Development and UX/UI, I craft innovative and impactful design
          solutions for the modern era. Beyond work, I find joy in playing
          volleyball and exploring different places through travel. In my
          leisure time, I indulge in watching anime and count myself as a big
          fan of the TV series "Friends."
        </p>
      </div>
    </div>
  );
};

export default PersonalInfos;
