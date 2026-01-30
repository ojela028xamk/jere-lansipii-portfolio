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
          src="/sentiment_images/all_mentions.png"
          alt="All mentions"
          width={626}
          height={496}
          quality={100}
        />
        <Image
          className={css.mentions_image}
          src="/sentiment_images/2star_mentions.png"
          alt="2 star mentions"
          width={626}
          height={496}
          quality={100}
        />
        <Image
          className={css.mentions_image}
          src="/sentiment_images/1star_mentions.png"
          alt="1 star mentions"
          width={626}
          height={496}
          quality={100}
        />
      </div>
      <div className={css.sentiment_summary_text}>
        <div className={css.sentiment_summary_text_column}>
          <h3>Overview & methodology</h3>
          <ul>
            <li>
              Prioritization of categories and reasonings behind the ranking is
              provided in this segment.
            </li>
            <li>
              Above is a <b>“Net Sentiment Score (NSS)”</b> table for 1- and
              2-star reviews per category.
            </li>
            <li>
              NSS score is calculated by subtracting the percentage of negative
              feedback from the percentage of positive feedback, providing a
              single number from +100 (all positive) to -100 (all negative),
              with 0 meaning there are equal amounts of positive and negative
              feedback.
            </li>
            <li>
              NSS does NOT take neutral sentiments into account. For deeper
              analysis that also takes neutral feedback into account, see the
              <b> “Insights deep dive”</b> segment.
            </li>
            <li>
              Among 1- and 2-star reviews NSS is below zero in almost all areas
              with some anomalies, like ambience being slightly positive (6)
              among 2-star ratings in 2025 Q1.
            </li>
            <li>
              Above there are also <b>line charts</b> that show how often
              category is mentioned out of all reviews by percentage.
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
        </div>
        <div className={css.sentiment_summary_text_column}>
          <b>Food (2nd priority):</b>
          <ul>
            <li>Overall, the most discussed category across all reviews.</li>
            <li>
              Since food is a common topic with negative sentiment, it is
              considered 2nd priority.
            </li>
            <li>
              It is slightly below service, because it is not as much of a
              negative driver for 1- and 2-star ratings.
            </li>
          </ul>
          <b> Price (3rd priority):</b>
          <ul>
            <li>
              Among 1- and 2-star reviews sentiment is almost entirely negative
              and overall, it is the 3rd most discussed category.
            </li>
            <li>
              Data suggests that some customers feel the experience (service +
              food) does not justify the cost.
            </li>
            <li>
              Although price is a big driver for negative sentiment among 1- and
              2-star reviews, it is discussed way less than food and service,
              making it a slightly lower priority.
            </li>
          </ul>
          <b>Cleanliness (4th priority):</b>
          <ul>
            <li>
              Category with the least amount of neutral sentiment, showing that
              it only has either positive or negative sentiment.
            </li>
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
            <li>Overall, ambience has the most neutral sentiment.</li>
            <li>
              Compared to all reviews, ambience as a topic goes down among 1-
              and 2- star reviews. It is sometimes the least discussed topic
              among 1-star reviews.
            </li>
            <li>
              Ambience is the last priority but that doesn’t mean it’s not
              important. It has negative sentiment, especially among 1-star
              reviews.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SentimentSummary;
