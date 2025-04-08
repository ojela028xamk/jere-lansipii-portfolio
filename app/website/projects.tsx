import css from "./projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Project = {
  translateKey: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    translateKey: "project1",
    image: "/finnish_map_quiz.PNG",
    link: "https://finland-map-quiz.vercel.app/",
  },
  {
    translateKey: "project2",
    image: "/band_template.png",
    link: "https://metal-band-template.vercel.app/",
  },
  {
    translateKey: "project3",
    image: "/guitar_dictionary.PNG",
    link: "https://guitar-dictionary.vercel.app/",
  },
  {
    translateKey: "project4",
    image: "/movie_quiz.png",
    link: "https://ojela028xamk.github.io/movie-quiz/",
  },
];

const Projects = (): JSX.Element => {
  const t = useTranslations("website");

  return (
    <div className={css.projects}>
      <div className={css.projects_content}>
        <h1>{t("projects.header")}</h1>
        <p>{t("projects.information")}</p>
        <div className={css.project_items}>
          {projects.map((project) => (
            <div key={project.translateKey} className={css.project_card}>
              <Image
                className={css.project_image}
                src={
                  project.image
                    ? project.image
                    : "https://ralfvanveen.com/wp-content/uploads//2021/06/Placeholder-_-Begrippenlijst.svg"
                }
                alt={"Project image"}
                width={1918}
                height={947}
              />
              <span className={css.project_name}>
                {t(`projects.${project.translateKey}.name`)}
              </span>
              <p className={css.project_description}>
                {t(`projects.${project.translateKey}.description`)}
              </p>
              <Link
                className={css.button_project}
                href={project.link}
                target="_blank"
              >
                {t("projects.link_button")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
