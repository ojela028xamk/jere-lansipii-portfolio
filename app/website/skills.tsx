import css from "./skills.module.scss";
import { FaDatabase, FaCode } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Skills = (): JSX.Element => {
  const t = useTranslations("website");
  const dataSkills = [
    "excel",
    "power_bi",
    "sql",
    "python",
    "bigquery",
    "fivetran",
    "github",
    "api",
    "powerpoint",
    "data_storytelling",
    "data_visualization",
  ];
  const appSkills = [
    "html",
    "javascript",
    "react",
    "cypress",
    "postman",
    "figma",
    "canva",
    "capcut",
    "ui",
    "graphic",
    "responsive",
  ];

  return (
    <div className={css.skills}>
      <div className={css.skills_content}>
        <h1>{t("skills.header")}</h1>
        <div className={css.skill_items}>
          <div className={css.item}>
            <div className={css.item_header}>
              <FaCode className={css.icon} />
              <span className={css.category}>{t("skills.app_header")}</span>
            </div>
            <ul>
              {appSkills.map((skill) => (
                <li key={skill}>{t(`skills.app_skills.${skill}`)}</li>
              ))}
            </ul>
          </div>
          <div className={css.item}>
            <div className={css.item_header}>
              <FaDatabase className={css.icon} />
              <span className={css.category}>{t("skills.data_header")}</span>
            </div>
            <ul>
              {dataSkills.map((skill) => (
                <li key={skill}>{t(`skills.data_skills.${skill}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
