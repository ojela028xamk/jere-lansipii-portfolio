import { FaArrowLeft } from "react-icons/fa6";
import css from "./powerbi.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ReturnButton from "../website/returnButton";
import Footer from "../website/footer";

const PowerBI = () => {
  const t = useTranslations("website");

  return (
    <>
      <ReturnButton />
      <div className={css.powerbi}>
        <div className={css.powerbi_project}>
          <h1 className={css.powerbi_title}>
            Analyzing sales for strategic growth
          </h1>
          <p>
            A Power BI dashboard and a PowerPoint presentation created for sales
            managers of a fictitious global electronics retailer. For this
            project, I used a modified version of sales data from Maven
            Analytics, with a timeframe from
            <b> January 2020 to August 2025.</b>
          </p>
          <p>
            The objective was to transform raw sales data into actionable
            insights, helping to answer key business questions and guide
            decision-making.
          </p>
          <p>
            <b>Key business questions:</b>
          </p>
          <ul>
            <li>
              What are the yearly sales trends based on items sold and category?
            </li>
            <li>What are the most and least-sold items by subcategory?</li>
            <li>
              How do sales trends differ between countries, and what about
              online sales?
            </li>
          </ul>
          <p>
            The dashboard is interactive, allowing users to filter data by
            country or online sales. Users can also click a specific year on a
            bar chart to show data for that year. The PowerPoint presentation
            synthesizes data from all areas and provides a more detailed
            analysis of sales trends. It also delivers key takeaways and
            strategic recommendations based on the data. For the best
            experience, both can be viewed full screen by clicking the icon in
            the bottom-right corner.
          </p>
          <h2>Power BI dashboard</h2>
          <iframe
            title="Electronics Sales Data"
            width="1024"
            height="612"
            src="https://app.powerbi.com/view?r=eyJrIjoiODg2M2M2MDItZTllOS00ZGQwLWI5MDMtMDE5MDJiY2ZmOTEzIiwidCI6IjY5MmViNDUwLTliYWYtNDk0MS1iOTY0LTQxMjU0ODNkZWJmMiIsImMiOjh9"
            allowFullScreen
          ></iframe>
          <h2>PowerPoint presentation</h2>
          <iframe
            src="https://1drv.ms/p/c/85919f3a6154abce/IQS4ht7Y-dX8QqbEoMjSLCqEAZkJFf4xg4NVjvxGPpkZoDs"
            width="1024"
            height="557"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PowerBI;
