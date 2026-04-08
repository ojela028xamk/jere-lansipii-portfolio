import css from "./skills.module.scss";
import { FaDatabase, FaCode, FaRobot } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { FaPencilAlt } from "react-icons/fa";

type Solution = {
  title: string;
  description: string;
  icon: JSX.Element;
  skills: string[];
};

const solutions: Solution[] = [
  {
    title: "skills.solution1.title",
    description: "skills.solution1.description",
    icon: <FaCode className={css.icon} />,
    skills: [
      "skills.skill.html",
      "skills.skill.javascript",
      "skills.skill.react",
      "skills.skill.responsive",
      "skills.skill.github",
      "skills.skill.api",
    ],
  },
  {
    title: "skills.solution3.title",
    description: "skills.solution3.description",
    icon: <FaPencilAlt className={css.icon} />,
    skills: [
      "skills.skill.graphic",
      "skills.skill.ui",
      "skills.skill.figma",
      "skills.skill.canva",
      "skills.skill.capcut",
    ],
  },
  {
    title: "skills.solution2.title",
    description: "skills.solution2.description",
    icon: <FaDatabase className={css.icon} />,
    skills: [
      "skills.skill.excel",
      "skills.skill.power_bi",
      "skills.skill.sql",
      "skills.skill.pandas",
      "skills.skill.databricks",
      "skills.skill.bigquery",
      "skills.skill.google_analytics",
      "skills.skill.google_tag",
      "skills.skill.powerpoint",
    ],
  },
  {
    title: "skills.solution4.title",
    description: "skills.solution4.description",
    icon: <FaRobot className={css.icon} />,
    skills: [
      "skills.skill.gemini",
      "skills.skill.vertex",
      "skills.skill.windsurf",
      "skills.skill.builder",
    ],
  },
];
const Skills = (): JSX.Element => {
  const t = useTranslations("website");

  return (
    <div className={css.skills}>
      <div className={css.skills_content}>
        <h1>{t("skills.header")}</h1>
        <div className={css.skill_items}>
          {solutions.map((solution) => (
            <div key={solution.title} className={css.item}>
              <div className={css.item_header}>
                {solution.icon}
                <span className={css.category}>{t(solution.title)}</span>
              </div>
              <p>{t(solution.description)}</p>
              <ul>
                {solution.skills.map((skill) => (
                  <li key={skill}>{t(skill)}</li>
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
