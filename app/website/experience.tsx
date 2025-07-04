import Image from "next/image";
import css from "./experience.module.scss";
import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations("website");

  return (
    <div className={css.experience}>
      <div className={css.experience_content}>
        <div className={css.recommended}>
          <Image
            className={css.aarne_avatar}
            src="/aarne.jpg"
            alt={"Aarne Savolainen"}
            width={180}
            height={180}
            priority
          />
          <p className={css.text}>{t("experience")}</p>
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
            priority
            quality={50}
          />
          <Image
            className={css.job_logo}
            src="/mipro.png"
            alt="Mipro logo"
            width={2048}
            height={342}
            priority
            quality={50}
          />
          <Image
            className={css.job_logo}
            src="/xamk.png"
            alt="XAMK logo"
            width={2409}
            height={976}
            priority
            quality={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
