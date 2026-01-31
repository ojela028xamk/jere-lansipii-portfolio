export type Insight = {
  id: number;
  title: string;
  content: JSX.Element;
  allImage: string;
  oneStarImage: string;
  twoStarImage: string;
  mentionsImage: string;
};

export const sentimentInsightsList: Insight[] = [
  {
    id: 1,
    title: "Service: The primary detractor (top priority)",
    content: (
      <>
        <ul>
          <li>
            Among all reviews there is volatility of negative sentiment across
            the timeline.
          </li>
          <ul>
            <li>
              Negative sentiment reached its second highest peak in 2023 Q4
              (27,39%) and highest in 2025 Q3 (29,85%).
            </li>
            <li>
              Between these peaks negative sentiment went down. At its lowest it
              was 16,74% in 2024 Q2.
            </li>
          </ul>
        </ul>
        <ul>
          <li>Service is almost all negative among 1-star reviews.</li>
          <ul>
            <li>This is especially true in 2024 and first half of 2023.</li>
            <li>
              During 2025 negative sentiment started to go down a bit with some
              positive and neutral sentiment increasing instead.
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            Service is a common topic with plenty of negative sentiment, making
            it the top priority.
          </li>
          <ul>
            <li>Overall, the second most mentioned category.</li>
            <li>
              Between 2024 Q4 – 2025 Q3 among 1-star reviews it was the most
              mentioned category.
            </li>
          </ul>
        </ul>
      </>
    ),
    allImage: "/sentiment_images/service_all.png",
    oneStarImage: "/sentiment_images/service_1star.png",
    twoStarImage: "/sentiment_images/service_2star.png",
    mentionsImage: "/sentiment_images/service_mentions.png",
  },
  {
    id: 2,
    title: "Food: High engagement, secondary risk (2nd priority)",
    content: (
      <>
        <ul>
          <li>
            Food is a category that has the most positive sentiment, and it is
            the most discussed category.
          </li>
          <ul>
            <li>
              Among all reviews negative sentiment remains below 20% during the
              timeline.
            </li>
            <li>
              Among all reviews food is mentioned over 90% during the timeline.
              Same tracks with 2-star reviews.
            </li>
            <li>
              However, among 1-star reviews discussion goes down. In 2024 Q2
              food was mentioned 94,83% but after that it goes down below 80%
              for the rest of the timeline.
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            Since food is overall the most discussed category with good amount
            of negative sentiment among 1- and 2-star reviews, it’s considered
            the second priority.
          </li>
          <ul>
            <li>
              Among 1- and 2-star reviews, after 2024 Q2 negative sentiment
              started to go down a bit.
            </li>
            <li>
              However, among all reviews negative sentiment started to increase
              from 2025 Q1 until 2025 Q3. In 2025 Q4 negative sentiment was at
              15,22%.
            </li>
            <li>
              Food is the second priority, because it’s not as much of a driver
              for low ratings compared to service.
            </li>
          </ul>
        </ul>
      </>
    ),
    allImage: "/sentiment_images/food_all.png",
    oneStarImage: "/sentiment_images/food_1star.png",
    twoStarImage: "/sentiment_images/food_2star.png",
    mentionsImage: "/sentiment_images/food_mentions.png",
  },
  {
    id: 3,
    title: "Price: Declining value (3rd priority)",
    content: (
      <>
        <ul>
          <li>
            Among all reviews negative sentiment has been increasing since 2024
            Q4.
          </li>
          <ul>
            <li>In 2025 Q4 positive sentiment is below 50%.</li>
            <li>
              While many love food and service, some think it’s not worth the
              price.
            </li>
          </ul>
        </ul>
        <ul>
          <li>Sentiment is almost all negative among 1- and 2-star ratings.</li>
          <ul>
            <li>
              Compared to all reviews, mentions also increase among low star
              ratings.
            </li>
            <li>
              However, prices are still discussed way less compared to service.
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            Price can become a higher priority if these trends keep persisting.
          </li>
          <ul>
            <li>
              Right now, price is slightly lower priority below service because
              it is not nearly as big of a topic.
            </li>
            <li>
              Since 2025 Q3 mentions started to increase, especially among
              1-star reviews. Also, since negative sentiment is increasing among
              all reviews, prices can become a second priority in 2026.
            </li>
          </ul>
        </ul>
      </>
    ),
    allImage: "/sentiment_images/price_all.png",
    oneStarImage: "/sentiment_images/price_1star.png",
    twoStarImage: "/sentiment_images/price_2star.png",
    mentionsImage: "/sentiment_images/price_mentions.png",
  },
  {
    id: 4,
    title: "Cleanliness: The “polarizing” category (4th priority)",
    content: (
      <>
        <ul>
          <li>
            People either love it or hate it. Cleanliness has minimal neutral
            sentiment.
          </li>
          <ul>
            <li>
              Among 1-star reviews across the timeline it is almost all negative
              sentiment.
            </li>
            <li>
              Data is very volatile among 2-star reviews. However, it is almost
              all negative in 2025.
            </li>
            <li>
              Among all reviews in 2023 Q3 negative sentiment was at 40,99% but
              it went down after that consistently to 19,30% in 2025 Q1.
              However, negative sentiment increased after that and in 2025 Q3 it
              was at 44,88%.
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            Since overall cleanliness is the least discussed category, it’s
            considered 4th priority.
          </li>
          <ul>
            <li>
              Among 1-star reviews in 2024 cleanliness is sometimes discussed
              more often than ambience.
            </li>
            <li>
              Cleanliness is above ambience, because it’s considered a bigger
              driver for negative sentiment.
            </li>
          </ul>
        </ul>
      </>
    ),
    allImage: "/sentiment_images/cleanliness_all.png",
    oneStarImage: "/sentiment_images/cleanliness_1star.png",
    twoStarImage: "/sentiment_images/cleanliness_2star.png",
    mentionsImage: "/sentiment_images/cleanliness_mentions.png",
  },
  {
    id: 5,
    title: "Ambience: The neutral category (last priority)",
    content: (
      <>
        <ul>
          <li>Ambience has the greatest number of neutral reviews.</li>
          <ul>
            <li>
              Among all reviews ambience is slightly more neutral than negative.
            </li>
            <li>
              Data has a lot of volatility among 1- and 2-star reviews with
              different sentiments. Overall, it’s still mostly negative.
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            Considered a last priority for its neutral nature and sometimes
            being the least discussed category.
          </li>
          <ul>
            <li>
              Among 1- and 2-star reviews mentions go down compared to all
              reviews.
            </li>
            <li>
              Ambience is still an important category. Especially since neutral
              and negative sentiment is increasing in 2025 among all reviews.
            </li>
          </ul>
        </ul>
      </>
    ),
    allImage: "/sentiment_images/ambience_all.png",
    oneStarImage: "/sentiment_images/ambience_1star.png",
    twoStarImage: "/sentiment_images/ambience_2star.png",
    mentionsImage: "/sentiment_images/ambience_mentions.png",
  },
];
