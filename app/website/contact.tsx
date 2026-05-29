import { useTranslations } from "next-intl";
import css from "./contact.module.scss";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Contact = (): JSX.Element => {
  const t = useTranslations("website");

  return (
    <div className={css.contact} id="contact">
      <div className={css.contact_content}>
        <h1>{t("contact_header")}</h1>
        <div className={css.contact_items}>
          <span>
            <FaLinkedin className={css.icon} />
            <Link
              className={css.link}
              href="https://www.linkedin.com/in/jere-lansipii/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </span>
          <span>
            <CiLocationOn className={css.icon} />
            Helsinki
          </span>
          <span>
            <MdEmail className={css.icon} />
            jerelans91@gmail.com
          </span>
          <span>
            <FaPhoneAlt className={css.icon} />
            +358 40 7729 448
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
