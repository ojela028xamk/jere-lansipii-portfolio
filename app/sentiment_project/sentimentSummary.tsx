import Image from "next/image";
import css from "./sentimentSummary.module.scss";

const SentimentSummary = () => {
  return (
    <div className={css.sentiment_summary}>
      <h2>Executive summary</h2>
      <div className={css.sentiment_summary_nss_container}>
        <Image
          className={css.nss_image}
          src="/sentiment_images/nss_score_table.png"
          alt="NSS score table"
          width={1193}
          height={550}
          quality={100}
        />
      </div>
      <div className={css.sentiment_summary_mentions_grid}>
        <Image
          className={css.mentions_image}
          src="/sentiment_images/2star_mentions.png"
          alt="2 star mentions"
          width={660}
          height={524}
          quality={100}
        />
        <Image
          className={css.mentions_image}
          src="/sentiment_images/1star_mentions.png"
          alt="1 star mentions"
          width={660}
          height={524}
          quality={100}
        />
      </div>
      <div className={css.sentiment_summary_text}>
        <div className={css.sentiment_summary_text_column}>
          <h3>Overview & methodology</h3>
          <ul>
            <li>
              This section uses <b>“Net Sentiment Score (NSS)”</b> table and
              <b> "Mention frequency"</b> line charts for 1- and 2-star reviews.
            </li>
            <li>
              NSS measures the balance of customer sentiment, ranging from +100
              (all positive) to -100 (all negative).
            </li>
            <li>
              NSS does NOT take neutral sentiments into account. For deeper
              analysis, see the <b> “Insights deep dive”</b> segment.
            </li>
            <li>
              Mention frequency indicates how often category is mentioned out of
              all 1- and 2-star reviews by percentage.
            </li>
          </ul>
          <h3>Priority ranking & key drivers</h3>
          <b>Service (top priority):</b>
          <ul>
            <li>
              Among 1-star reviews service is a big driver for negative
              sentiment, almost being all negative in some time periods. It is
              also the most mentioned category between 2024 Q4 – 2025 Q3.
            </li>
            <li>
              Among 2-star reviews there is volatility on how often service is
              discussed, but overall, it is still the second most mentioned
              category with plenty of negative sentiment.
            </li>
            <li>
              When service fails, it is the primary driver of lowest ratings.
            </li>
          </ul>
          <b>Food (2nd priority):</b>
          <ul>
            <li>Overall, the most discussed category.</li>
            <li>
              Since food is a common topic with negative sentiment, it is
              considered 2nd priority.
            </li>
            <li>
              Food is slightly below service, because it is not as much of a
              negative driver.
            </li>
          </ul>
        </div>
        <div className={css.sentiment_summary_text_column}>
          <b> Price (3rd priority):</b>
          <ul>
            <li>
              Sentiment is mostly negative and overall, it is the 3rd most
              discussed category.
            </li>
            <li>
              Data suggests that some customers feel the experience (service +
              food) does not justify the cost.
            </li>
            <li>
              Although price is a big driver for negative sentiment, it is
              discussed way less than food and service, making it a slightly
              lower priority.
            </li>
          </ul>
          <b>Cleanliness (4th priority):</b>
          <ul>
            <li>
              Sentiment is almost all negative among 1-star reviews and in 2025
              among 2-star reviews.
            </li>
            <li>
              Least discussed category among 2-star reviews but it is discussed
              more among 1-star reviews.
            </li>
            <li> For reasons above it is the 4th priority.</li>
          </ul>
          <b>Ambience (last priority):</b>
          <ul>
            <li>Sometimes the least discussed topic among 1-star reviews.</li>
            <li>It has negative sentiment, especially among 1-star reviews.</li>
            <li>
              Ambience is the last priority but that doesn’t mean it’s not
              important.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SentimentSummary;
