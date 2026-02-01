import { Fragment } from "react";
import SentimentInsightsItem from "./sentimentInsightsItem";
import { sentimentInsightsList } from "./sentimentInsightsList";

const SentimentInsights = () => {
  return (
    <div>
      <h2>Insights deep dive</h2>
      <p>
        This segment uses <b>stacked area charts </b>to visualize sentiment
        distribution (positive, neutral, negative) and <b>line charts</b> to
        track mention frequency across 1-star, 2-star and all reviews.
      </p>
      {sentimentInsightsList.map((insight) => (
        <Fragment key={insight.id}>
          <SentimentInsightsItem insight={insight} />
          <br />
        </Fragment>
      ))}
    </div>
  );
};

export default SentimentInsights;
