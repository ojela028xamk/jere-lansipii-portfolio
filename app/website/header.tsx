import Image from "next/image";
import css from "./header.module.scss";
import { aboutMe } from "./content";
import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <div className={css.header}>
      <div className={css.header_content}>
        <div className={css.header_content_left}>
          <div className={css.text}>
            <h2>Software Developer & Graphic Designer</h2>
            <h1>JERE LÄNSIPII</h1>
            <p>{aboutMe}</p>
          </div>
          <div className={css.buttons}>
            <Link
              className={css.button_cv}
              href="https://drive.google.com/file/d/1o3bsGmkNMjoStX7TJrDpobjQxG9hXLFU/view?usp=drive_link"
              target="_blank"
            >
              Open CV
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
          <Image
            className={css.image}
            src="/avatar.png"
            alt="Jere Länsipii Avatar"
            width={828}
            height={816}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
