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
    mentionsImage: "",
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
    mentionsImage: "",
  },
];
