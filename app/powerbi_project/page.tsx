import css from "./powerbi.module.scss";

const PowerBI = () => {
  return (
    <div className={css.powerbi}>
      <h1>Power BI Dashboard</h1>
      <iframe
        title="Electronics Sales Data"
        width="1024"
        height="612"
        src="https://app.powerbi.com/view?r=eyJrIjoiODg2M2M2MDItZTllOS00ZGQwLWI5MDMtMDE5MDJiY2ZmOTEzIiwidCI6IjY5MmViNDUwLTliYWYtNDk0MS1iOTY0LTQxMjU0ODNkZWJmMiIsImMiOjh9"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PowerBI;
