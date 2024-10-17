import Image from "next/image";
import css from "./experience.module.scss";

const Experience = () => {
  return (
    <div className={css.experience}>
      <div className={css.experience_content}>
        <div className={css.recommended}>
          <Image
            className={css.aarne_avatar}
            src="/aarne.jfif"
            alt={"Aarne Savolainen"}
            width={180}
            height={180}
          />
          <p className={css.text}>
            Excellent design, great communication, fast turnaround of revisions.
            I had a clear vision of what I wanted. Jere did not just deliver it
            he aimproved upon it substantially. Recommended!
          </p>
          <span className={css.name}>
            <b>Aarne Savolainen, WheelQ</b>
          </span>
        </div>
        <div className={css.job_logos}>
          <img className={css.job_logo} src="/wheelq.png" alt={"WheelQ logo"} />
          <img className={css.job_logo} src="/mipro.png" alt={"Mipro logo"} />
          <img className={css.job_logo} src="/xamk.png" alt={"XAMK logo"} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
