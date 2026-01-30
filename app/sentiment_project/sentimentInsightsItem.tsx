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
            src={insight.allImage}
            alt={""}
            width={623}
            height={495}
            quality={100}
          />
          <Image
            className={css.image}
            src={insight.twoStarImage}
            alt={""}
            width={623}
            height={495}
            quality={100}
          />
          <Image
            className={css.image}
            src={insight.oneStarImage}
            alt={""}
            width={623}
            height={495}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SentimentInsightsItem;
