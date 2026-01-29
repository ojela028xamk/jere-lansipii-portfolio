import { Insight } from "./sentimentInsightsList";
import css from "./sentimentInsightsItem.module.scss";
import Image from "next/image";

type SentimentInsightsItemProps = {
  insight: Insight;
};

const SentimentInsightsItem = ({ insight }: SentimentInsightsItemProps) => {
  return (
    <div className={css.sentiment_insights_item}>
      <h3>{insight.title}</h3>
      <div className={css.item_content}>
        <div className={css.item_text}>{insight.content}</div>
        <div className={css.item_images}>
          <Image
            className={css.image}
            src={"/sentiment_images/1star_mentions.png"}
            alt={""}
            width={626}
            height={496}
            quality={100}
          />
          <Image
            className={css.image}
            src={"/sentiment_images/2star_mentions.png"}
            alt={""}
            width={626}
            height={496}
            quality={100}
          />
          <Image
            className={css.image}
            src={"/sentiment_images/all_mentions.png"}
            alt={""}
            width={626}
            height={496}
            quality={100}
          />
          <Image
            className={css.image}
            src={"/sentiment_images/all_mentions.png"}
            alt={""}
            width={626}
            height={496}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SentimentInsightsItem;
