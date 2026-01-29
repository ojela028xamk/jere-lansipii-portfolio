import Link from "next/link";
import css from "./sentiment.module.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import SentimentIntro from "./sentimentIntro";
import SentimentStructure from "./sentimentStructure";
import SentimentSummary from "./sentimentSummary";

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
        <h1 className={css.sentiment_title}>Restaurant sentiment analysis</h1>
        <SentimentIntro />
        <hr />
        <SentimentStructure />
        <hr />
        <SentimentSummary />
        <hr />
        <h2>Insights deep dive</h2>
        <h2>Recommendations</h2>
      </div>
    </div>
  );
};

export default Sentiment;
