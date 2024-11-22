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
            Jere demonstrated a good visual eye as well as knowledge of user
            interface/user experience design. It was also easy to communicate
            with him. I had a clear vision of what I wanted. Jere implemented
            this as well as greatly improved it. Recommended!
          </p>
          <span className={css.name}>
            <b>Aarne Savolainen, WheelQ</b>
          </span>
        </div>
        <div className={css.job_logos}>
          <Image
            className={css.job_logo}
            src="/wheelq.png"
            alt="WheelQ logo"
            width={514}
            height={134}
          />
          <Image
            className={css.job_logo}
            src="/mipro.png"
            alt="Mipro logo"
            width={2048}
            height={342}
          />
          <Image
            className={css.job_logo}
            src="/xamk.png"
            alt="XAMK logo"
            width={2409}
            height={976}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
