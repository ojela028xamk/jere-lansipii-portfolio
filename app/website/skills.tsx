import css from "./skills.module.scss";
import { SkillIcon, skills } from "./content";
import { FaPenRuler, FaAtom, FaCode, FaBolt } from "react-icons/fa6";

const Skills = (): JSX.Element => {
  const handleIcon = (icon: SkillIcon) => {
    switch (icon) {
      case SkillIcon.CODE:
        return <FaCode className={css.icon} />;
      case SkillIcon.GRAPHIC:
        return <FaPenRuler className={css.icon} />;
      case SkillIcon.OTHER:
        return <FaBolt className={css.icon} />;
      default:
        return <FaAtom className={css.icon} />;
    }
  };

  return (
    <div className={css.skills}>
      <div className={css.skills_content}>
        <h1>My Skills</h1>
        <div className={css.skill_items}>
          {skills.map((skill) => (
            <div key={skill.category} className={css.item}>
              <div className={css.item_header}>
                {handleIcon(skill.icon)}
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
