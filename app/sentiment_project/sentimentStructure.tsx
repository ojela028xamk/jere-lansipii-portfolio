import Image from "next/image";
import css from "./sentimentStructure.module.scss";

const SentimentStructure = () => {
  return (
    <div className={css.sentiment_structure}>
      <h2>Data structure overview</h2>
      <hr />
      <p>
        The final data table structure is visualized below with some examples of
        feedback with categories and sentiment.
      </p>
      <Image
        className={css.image}
        src="/sentiment_images/data_structure.png"
        alt="Data structure"
        width={914}
        height={394}
        quality={100}
      />
    </div>
  );
};

export default SentimentStructure;
