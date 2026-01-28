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
      <h3>Overview & methodology</h3>
      <ul>
        <li>
          Prioritization of categories and reasonings behind the ranking is
          provided in this segment.
        </li>
        <li>
          Above is a <b>“Net Sentiment Score (NSS)”</b> table for 1- and 2-star
          reviews per category.
        </li>
        <li>
          NSS score is calculated by subtracting the percentage of negative
          feedback from the percentage of positive feedback, providing a single
          number from +100 (all positive) to -100 (all negative), with 0 meaning
          there are equal amounts of positive and negative feedback.
        </li>
        <li>
          NSS does NOT take neutral sentiments into account. For deeper analysis
          that also takes neutral feedback into account, see the “Insights deep
          dive” segment.
        </li>
        <li>
          Among 1- and 2-star reviews NSS is below zero in almost all areas with
          some anomalies, like ambience being slightly positive (6) among 2-star
          ratings in 2025 Q1.
        </li>
        <li>
          Above there are also line charts that show how often category is
          mentioned out of all reviews by percentage.
        </li>
      </ul>
      <h3>Priority ranking & key drivers</h3>
      Service (top priority):
      <ul>
        <li>
          Among 1-star reviews service is a big driver for negative sentiment,
          almost being all negative in some time periods. It is also the most
          mentioned category between 2024 Q4 – 2025 Q3.
        </li>
        <li>
          Among 2-star reviews there is volatility on how often service is
          discussed, but overall, it is still the second most mentioned category
          with plenty of negative sentiment.
        </li>
        <li>When service fails, it is the primary driver of lowest ratings.</li>
      </ul>
      Food (2nd priority):
      <ul>
        Overall, the most discussed category across all reviews. Since food is a
        common topic with negative sentiment, it is considered 2nd priority. It
        is slightly below service, because it is not as much of a negative
        driver for 1- and 2-star ratings.
      </ul>
      Price (3rd priority):
      <ul>
        Among 1- and 2-star reviews sentiment is almost entirely negative and
        overall, it is the 3rd most discussed category. Data suggests that some
        customers feel the experience (service + food) does not justify the
        cost. Although price is a big driver for negative sentiment among 1- and
        2-star reviews, it is discussed way less than food and service, making
        it a slightly lower priority.
      </ul>
      Cleanliness (4th priority):
      <ul>
        Category with the least amount of neutral sentiment, showing that it
        only has either positive or negative sentiment. Sentiment is almost all
        negative among 1-star reviews and in 2025 among 2-star reviews. Least
        discussed category among 2-star reviews but it is discussed more among
        1-star reviews. For reasons above it is the 4th priority.
      </ul>
      Ambience (last priority)
      <ul>
        Overall, ambience has the most neutral sentiment. Compared to all
        reviews, ambience as a topic goes down among 1- and 2- star reviews. It
        is sometimes the least discussed topic among 1-star reviews. Ambience is
        the last priority but that doesn't mean it’s not important. It has
        negative sentiment, especially among 1-star reviews.
      </ul>
    </div>
  );
};

export default SentimentSummary;
