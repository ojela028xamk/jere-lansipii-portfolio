import css from "./skills.module.scss";
import { FaDatabase, FaCode, FaRobot } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { FaPencilAlt } from "react-icons/fa";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

type Solution = {
  title: string;
  description: string;
  image: string;
  skills: string[];
};

const solutions: Solution[] = [
  {
    title: "skills.solution1.title",
    description: "skills.solution1.description",
    image: "/sentiment_images/sentiment_project.png",
    skills: ["skills.skill.react", "skills.skill.api", "skills.skill.seo"],
  },
  {
    title: "skills.solution3.title",
    description: "skills.solution3.description",
    image: "/sentiment_images/sentiment_project.png",
    skills: [
      "skills.skill.graphic",
      "skills.skill.wireframe",
      "skills.skill.edit",
    ],
  },
  {
    title: "skills.solution2.title",
    description: "skills.solution2.description",
    image: "/sentiment_images/sentiment_project.png",
    skills: [
      "skills.skill.databricks",
      "skills.skill.power_bi",
      "skills.skill.web_analytics",
    ],
  },
  {
    title: "skills.solution4.title",
    description: "skills.solution4.description",
    image: "/sentiment_images/sentiment_project.png",
    skills: ["skills.skill.prompt", "skills.skill.info", "skills.skill.agent"],
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
              <Image
                className={css.item_image}
                src={
                  solution.image
                    ? solution.image
                    : "https://ralfvanveen.com/wp-content/uploads//2021/06/Placeholder-_-Begrippenlijst.svg"
                }
                alt={"Project image"}
                width={1200}
                height={545}
                quality={50}
              />
              <div className={css.item_content}>
                <span className={css.item_category}>{t(solution.title)}</span>
                <p>{t(solution.description)}</p>
                <ul>
                  {solution.skills.map((skill) => (
                    <li key={skill}>{t(skill)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
