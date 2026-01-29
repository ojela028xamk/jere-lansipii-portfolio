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
    allImage: "",
    oneStarImage: "",
    twoStarImage: "",
    mentionsImage: "",
  },
];
