import { contact } from "./content";
import css from "./contact.module.scss";

const Contact = (): JSX.Element => {
  return (
    <div className={css.contact}>
      <div className={css.contact_content}>
        <h1>Contact</h1>
        <div className={css.contact_items}>
          {Object.entries(contact).map(([name, value]) => (
            <div key={name} className={css.item}>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
