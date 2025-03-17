import css from "./skills.module.scss";
import { SkillIcon } from "./content";
import { FaPenRuler, FaAtom, FaCode, FaBolt } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Skills = (): JSX.Element => {
  const t = useTranslations("website");
  const codingSkills = [
    "HTML/CSS/JS",
    "Sass",
    "React",
    "Next.js",
    "TypeScript",
    "Cypress",
  ];
  const designSkills = ["graphic", "ui", "ux", "responsive", "figma"];

  return (
    <div className={css.skills}>
      <div className={css.skills_content}>
        <h1>{t("skills.header")}</h1>
        <div className={css.skill_items}>
          <div className={css.item}>
            <div className={css.item_header}>
              <FaCode className={css.icon} />
              <span className={css.category}>{t("skills.coding_header")}</span>
            </div>
            <ul>
              {codingSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={css.item}>
            <div className={css.item_header}>
              <FaPenRuler className={css.icon} />
              <span className={css.category}>{t("skills.design_header")}</span>
            </div>
            <ul>
              {designSkills.map((skill) => (
                <li key={skill}>{t(`skills.${skill}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
