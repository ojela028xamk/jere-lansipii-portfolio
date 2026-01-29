import { Insight } from "./sentimentInsightsList";

type SentimentInsightsItemProps = {
  insight: Insight;
};

const SentimentInsightsItem = ({ insight }: SentimentInsightsItemProps) => {
  return (
    <div>
      <h3>{insight.title}</h3>
      {insight.content}
    </div>
  );
};

export default SentimentInsightsItem;
