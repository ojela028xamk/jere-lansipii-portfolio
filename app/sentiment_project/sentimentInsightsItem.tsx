import { Insight } from "./sentimentInsightsList";
import css from "./sentimentInsightsItem.module.scss";
import Image from "next/image";

type SentimentInsightsItemProps = {
  insight: Insight;
};

const SentimentInsightsItem = ({ insight }: SentimentInsightsItemProps) => {
  return (
    <div
      className={css.sentiment_insights_item}
      style={{ border: `1px solid ${insight.color}` }}
    >
      <h3 style={{ backgroundColor: `${insight.color}` }}>{insight.title}</h3>
      <div className={css.item_content}>
        <div className={css.item_text}>{insight.content}</div>
        <div className={css.item_images}>
          <Image
            className={css.image}
            src={insight.allImage}
            alt={"Sentiment of all reviews"}
            width={645}
            height={513}
            quality={100}
          />
          <Image
            className={css.image}
            src={insight.twoStarImage}
            alt={"Sentiment among two star reviews"}
            width={645}
            height={513}
            quality={100}
          />
          <Image
            className={css.image}
            src={insight.oneStarImage}
            alt={"Sentiment among one star reviews"}
            width={645}
            height={513}
            quality={100}
          />
          <Image
            className={css.image}
            src={insight.mentionsImage}
            alt={"Category mentions"}
            width={655}
            height={521}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SentimentInsightsItem;
