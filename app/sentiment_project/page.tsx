import css from "./sentiment.module.scss";
import SentimentIntro from "./sentimentIntro";
import SentimentStructure from "./sentimentStructure";
import SentimentSummary from "./sentimentSummary";
import SentimentInsights from "./sentimentInsights";
import SentimentRecommend from "./sentimentRecommend";
import ReturnButton from "../website/returnButton";

const Sentiment = () => {
  return (
    <>
      <ReturnButton />
      <div className={css.sentiment}>
        <div className={css.sentiment_project}>
          <SentimentIntro />
          <hr />
          <SentimentStructure />
          <hr />
          <SentimentSummary />
          <br />
          <hr />
          <SentimentInsights />
          <hr />
          <SentimentRecommend />
        </div>
      </div>
    </>
  );
};

export default Sentiment;
