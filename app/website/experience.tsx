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
            quality={50}
            priority
          />
          <p className={css.text}>{t("experience")}</p>
          <span className={css.name}>
            <b>Aarne Savolainen, WheelQ</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
