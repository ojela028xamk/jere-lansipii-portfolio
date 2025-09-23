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
          Electronics Sales Power BI Dashboard
        </h1>
        <iframe
          title="Electronics Sales Data"
          width="1024"
          height="612"
          src="https://app.powerbi.com/view?r=eyJrIjoiODg2M2M2MDItZTllOS00ZGQwLWI5MDMtMDE5MDJiY2ZmOTEzIiwidCI6IjY5MmViNDUwLTliYWYtNDk0MS1iOTY0LTQxMjU0ODNkZWJmMiIsImMiOjh9"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PowerBI;
