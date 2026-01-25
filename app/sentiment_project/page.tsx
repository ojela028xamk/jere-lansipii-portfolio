import Link from "next/link";
import css from "./sentiment.module.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
        <h2>Data structure overview</h2>
        <p>
          The final data table structure is visualized below with some examples
          of feedback with categories and sentiment.
        </p>
        <Image
          className={css.image}
          src="/sentiment_images/data_structure.png"
          alt="Data structure"
          width={914}
          height={394}
          quality={100}
        />
        <h2>Executive summary</h2>
        <div className={css.nss_table_container}>
          <Image
            className={css.nss_score_table_image}
            src="/sentiment_images/nss_score_table.png"
            alt="Data structure"
            width={1261}
            height={712}
            quality={100}
          />
        </div>
        <div className={css.mentions_image_grid}>
          <Image
            className={css.image}
            src="/sentiment_images/all_mentions.png"
            alt="Data structure"
            width={626}
            height={496}
            quality={100}
          />
          <Image
            className={css.image}
            src="/sentiment_images/1star_mentions.png"
            alt="Data structure"
            width={626}
            height={496}
            quality={100}
          />
          <Image
            className={css.image}
            src="/sentiment_images/2star_mentions.png"
            alt="Data structure"
            width={626}
            height={496}
            quality={100}
          />
        </div>
        <h2>Insights deep dive</h2>
        <h2>Recommendations</h2>
      </div>
    </div>
  );
};

export default Sentiment;
