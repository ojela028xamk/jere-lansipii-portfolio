import { FaArrowLeft } from "react-icons/fa6";
import css from "./powerbi.module.scss";
import Link from "next/link";

const PowerBI = () => {
  return (
    <div className={css.powerbi}>
      <div className={css.powerbi_project}>
        <Link href="/">
          <button className={css.powerbi_back_button}>
            <FaArrowLeft className={css.icon} /> Takaisin etusivulle
          </button>
        </Link>
        <h1 className={css.powerbi_title}>
          Analyzing sales for strategic growth
        </h1>
        <p>
          A dashboard created for sales managers of a fictitious global
          electronics retailer. For this project, I used a modified version of
          sales data from Maven Analytics, with a timeframe from
          <b> January 2020 to August 2025.</b>
        </p>
        <p>
          The objective was to transform raw sales data into actionable
          insights, helping to answer key business questions and guide
          decision-making.
        </p>
        <p>
          <b>Key Business Questions:</b>
        </p>
        <ul>
          <li>
            What are the yearly sales trends based on items sold and category?
          </li>
          <li>What are the most and least-sold items by subcategory?</li>
          <li>
            How do sales trends differ between countries, and what about online
            sales?
          </li>
        </ul>
        <p>
          The dashboard is interactive, allowing the user to filter data by
          country or online sales. Users can also click a specific year on a bar
          chart to show data for that year. For the best experience, the
          dashboard can be viewed full screen by clicking the two arrows in the
          bottom-right corner.
        </p>
        <p>
          This project demonstrates my ability to not only create visually
          compelling dashboards but also to translate complex data into clear,
          valuable insights that drive business results.
        </p>
        <h2>Power BI Dashboard</h2>
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
  );
};

export default PowerBI;
