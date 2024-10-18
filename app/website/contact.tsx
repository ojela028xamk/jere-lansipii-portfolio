import css from "./contact.module.scss";

const Contact = (): JSX.Element => {
  return (
    <div className={css.contact}>
      <div className={css.contact_content}>
        <h1>Stay Connected</h1>
        <div className={css.contact_items}>
          <span>Helsinki, Finland</span>
          <span>jerelans91@gmail.com</span>
          <span>+358 40 7729 448</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
