import Image from "next/image";
import css from "./header.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitch from "./languageSwitch";

const Header = (): JSX.Element => {
  const t = useTranslations("website");

  return (
    <div className={css.header}>
      <div className={css.header_content}>
        <div className={css.header_content_left}>
          <div className={css.text}>
            <h2>{t("header.title")}</h2>
            <h1>JERE LÄNSIPII</h1>
            <p>{t("header.description")}</p>
          </div>
          <div className={css.buttons}>
            <Link
              className={css.button_cv}
              href="https://drive.google.com/file/d/1o3bsGmkNMjoStX7TJrDpobjQxG9hXLFU/view?usp=drive_link"
              target="_blank"
            >
              {t("header.open_cv")}
            </Link>
            <Link
              href="https://linkedin.com/in/jere-länsipii-60b1a3217"
              target="_blank"
            >
              <Image
                className={css.button_icon}
                src="/linkedin.png"
                alt="Linkedin link"
                width={60}
                height={60}
              />
            </Link>
            <Link href="https://github.com/ojela028xamk" target="_blank">
              <Image
                className={css.button_icon}
                src="/github.png"
                alt="Github link"
                width={55}
                height={55}
              />
            </Link>
          </div>
        </div>
        <div className={css.header_content_right}>
          <LanguageSwitch />
          <Image
            className={css.image}
            src="/avatar.png"
            alt="Jere Länsipii Avatar"
            width={764}
            height={786}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
