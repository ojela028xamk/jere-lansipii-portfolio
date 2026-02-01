import Image from "next/image";
import css from "./sentimentIntro.module.scss";

const SentimentIntro = () => {
  return (
    <div className={css.sentiment_intro}>
      <div className={css.sentiment_intro_header}>
        <h1>Restaurant sentiment analysis</h1>
        <Image
          className={css.header_image}
          src="/sentiment_images/header_image.png"
          alt="Data structure"
          width={1057}
          height={408}
          quality={100}
        />
      </div>
      <p>
        This project synthesizes real-life Yelp customer reviews from various
        Korean restaurants into one representative model. Prepared for the
        <b> Chief Operating Officer (COO)</b>, this report provides an in-depth
        analysis of these reviews to figure out what areas should be improved
        and how to increase the star rating.
      </p>
      <p>
        <b>Natural Language Processing (NLP)</b> is utilized to go through each
        review and check which categories get mentioned (ambience, cleanliness,
        food, price, service). After that sentiment is assigned for those
        categories (positive, neutral, negative). If a category is not mentioned
        in the review, the category is simply left blank. Overall sentiment is
        also provided for all reviews, but this field is not used in the final
        report. Star rating from 1-5 already existed on these reviews.
      </p>
      <p>
        In-depth analysis is based on yearly/quarterly data between
        <b> January 2023 – December 2025</b>. The key insights and
        recommendations focus on the following areas and questions:
      </p>
      <ul>
        <li>
          Which categories influence low star ratings (1-2) and negative
          sentiment?
        </li>
        <li>Which categories are talked about often among low star ratings?</li>
        <li>
          How should categories be prioritized from most important to least
          important and why?
        </li>
      </ul>
    </div>
  );
};

export default SentimentIntro;
