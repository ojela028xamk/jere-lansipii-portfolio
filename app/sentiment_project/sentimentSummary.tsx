import Image from "next/image";
import css from "./sentimentSummary.module.scss";

const SentimentSummary = () => {
  return (
    <div className={css.sentiment_summary}>
      <h2>Executive summary</h2>
      <hr />
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
    </div>
  );
};

export default SentimentSummary;
