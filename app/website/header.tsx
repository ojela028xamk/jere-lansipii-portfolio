"use client";
import Image from "next/image";
import css from "./header.module.scss";
import { useTranslations } from "next-intl";
import LanguageSwitch from "./languageSwitch";

const Header = (): JSX.Element => {
  const t = useTranslations("website");

  const scrollToSection = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={css.header}>
      <div className={css.header_content}>
        <div className={css.header_content_left}>
          <LanguageSwitch />
          <div className={css.text}>
            <h1>{t("header.title")}</h1>
            <p>{t("header.description")}</p>
          </div>
          <div className={css.buttons}>
            <button className={css.button_contact} onClick={scrollToSection}>
              {t("header.contact")}
            </button>
            {/*<Link
              href="https://linkedin.com/in/jere-länsipii-60b1a3217"
              target="_blank"
            >
              <Image
                className={css.button_icon}
                src="/linkedin.png"
                alt="Linkedin link"
                width={60}
                height={60}
                priority
                quality={50}
              />
            </Link>
            <Link href="https://github.com/ojela028xamk" target="_blank">
              <Image
                className={css.button_icon}
                src="/github.png"
                alt="Github link"
                width={55}
                height={55}
                priority
                quality={50}
              />
            </Link>*/}
          </div>
          <div className={css.job_logos}>
            <Image
              className={css.job_logo}
              src="/booosted.png"
              alt="Booosted logo"
              width={300}
              height={62}
              priority
              quality={50}
            />
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
          </div>
        </div>
        <div className={css.header_content_right}>
          <Image
            className={css.image}
            src="/avatar.png"
            alt="Jere Länsipii Avatar"
            width={565}
            height={582}
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
