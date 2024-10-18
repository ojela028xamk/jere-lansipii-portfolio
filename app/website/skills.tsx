import css from "./skills.module.scss";
import { skills } from "./content";

const Skills = (): JSX.Element => {
  return (
    <div className={css.skills}>
      <div className={css.skills_content}>
        <h1>My Skills</h1>
        <div className={css.skill_items}>
          {skills.map((skill) => (
            <div key={skill.category} className={css.item}>
              <div className={css.item_header}>
                <span className={`${css.icon} material-symbols-outlined`}>
                  {skill.icon}
                </span>
                <span className={css.category}>{skill.category}</span>
              </div>
              <ul>
                {skill.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
