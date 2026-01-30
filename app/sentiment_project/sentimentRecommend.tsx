import css from "./sentimentRecommend.module.scss";

const SentimentRecommend = () => {
  return (
    <div className={css.sentiment_recommend}>
      <h2>Recommendations</h2>
      <p>Based on the insights, here are recommendations for the restaurant.</p>
      <b>Service:</b>
      <ul>
        <li>
          Address the volatility of negative sentiment with the staff. What did
          they do differently when negative sentiment was going down in 2024 but
          went back up again in 2025?
        </li>
        <li>
          Train the staff to resolve issues when guests seem unhappy e.g.
          offering a free drink.
        </li>
        <li>
          Increase staffing levels during peak hours to ensure quality does not
          drop when the restaurant is full.
        </li>
      </ul>
      <b>Food:</b>
      <ul>
        <li>
          Since negative sentiment increased in 2025, conduct a menu audit to
          ensure recipe consistency across all shifts.
        </li>
        <li>
          Capitalize on positive sentiment and the fact that it’s the most
          discussed category. Highlight "fan favorite" dishes in marketing to
          maintain their status as a primary draw.
        </li>
      </ul>
      <b>Price:</b>
      <ul>
        <li>
          Introduce lunch specials or "family sets" that increase the perceived
          value of the meal.
        </li>
        <li>Evaluate if portion sizes have decreased over the timeline.</li>
      </ul>
      <b>Cleanliness:</b>
      <ul>
        <li>
          Like with service, address the volatility of negative sentiment
          between 2023 Q3 – 2025 Q3 with the staff.
        </li>
        <li>
          Focus on first impressions by making sure the entryway and common
          areas are spotless to prevent immediate negative bias.
        </li>
        <li>
          Implement an hourly restroom and dining area checklist to eliminate
          these "deal-breaker" negative experiences.
        </li>
      </ul>
      <b>Ambience:</b>
      <ul>
        <li>
          Ambience should be addressed only after service and food scores have
          stabilized.
        </li>
        <li>
          Address negative/neutral sentiment by reviewing things like lighting
          and music volume.
        </li>
        <li>
          Since this is the lowest priority, avoid major renovations and focus
          on small updates.
        </li>
      </ul>
    </div>
  );
};

export default SentimentRecommend;
