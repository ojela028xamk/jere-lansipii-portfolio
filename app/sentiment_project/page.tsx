import Link from "next/link";
import css from "./sentiment.module.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Sentiment = () => {
  const t = useTranslations("website");

  return (
    <div className={css.sentiment}>
      <div className={css.sentiment_project}>
        <Link href="/">
          <button className={css.sentiment_back_button}>
            <FaArrowLeft className={css.icon} /> {t("projects.go_back")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sentiment;
