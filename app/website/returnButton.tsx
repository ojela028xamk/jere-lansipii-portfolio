import { FaArrowLeft } from "react-icons/fa6";
import css from "./returnButton.module.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ReturnButton = () => {
  const t = useTranslations("website");

  return (
    <div className={css.return_button}>
      <div className={css.return_button_container}>
        <Link href="/">
          <button className={css.container_button}>
            <FaArrowLeft className={css.icon} /> {t("projects.go_back")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReturnButton;
