import css from "./projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { DiGithubBadge } from "react-icons/di";

type Project = {
  translateKey: string;
  image: string;
  link: string;
  link_github: string;
};

const projects: Project[] = [
  {
    translateKey: "project1",
    image: "/finnish_map_quiz.PNG",
    link: "https://finland-map-quiz.vercel.app/",
    link_github: "https://github.com/ojela028xamk/finland-map-quiz",
  },
  {
    translateKey: "project2",
    image: "/band_template.png",
    link: "https://metal-band-template.vercel.app/",
    link_github: "https://github.com/ojela028xamk/metal-band-template",
  },
  {
    translateKey: "project3",
    image: "/guitar_dictionary.png",
    link: "https://guitar-dictionary.vercel.app/",
    link_github: "https://github.com/ojela028xamk/guitar-dictionary",
  },
  {
    translateKey: "project4",
    image: "/movie_quiz.png",
    link: "https://ojela028xamk.github.io/movie-quiz/",
    link_github: "https://github.com/ojela028xamk/movie-quiz",
  },
];

const Projects = (): JSX.Element => {
  const t = useTranslations("website");

  return (
    <div className={css.projects}>
      <div className={css.projects_content}>
        <h1>{t("projects.header")}</h1>
        <h2>{t("projects.data_header")}</h2>
        <div className={css.project_card}>
          <Image
            className={css.project_image}
            style={{ backgroundColor: "#f5f3f5" }}
            src={"/sentiment_images/sentiment_project.png"}
            alt={"Project image"}
            width={1200}
            height={545}
            quality={50}
          />
          <span className={css.project_name}>
            {t("projects.project_data1.name")}
          </span>
          <p className={css.project_description}>
            {t("projects.project_data1.description")}
          </p>
          <Link className={css.button_project} href={"/sentiment_project"}>
            {t("projects.link_button")}
          </Link>
        </div>
        <div className={css.project_card}>
          <Image
            className={css.project_image}
            src={"/powerbi_dashboard.PNG"}
            alt={"Project image"}
            width={1200}
            height={545}
            quality={50}
          />
          <span className={css.project_name}>
            {t("projects.project_data2.name")}
          </span>
          <p className={css.project_description}>
            {t("projects.project_data2.description")}
          </p>
          <Link className={css.button_project} href={"/powerbi_project"}>
            {t("projects.link_button")}
          </Link>
        </div>
        <h2>{t("projects.websites_header")}</h2>
        <p>{t("projects.websites_information")}</p>
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
                width={1200}
                height={545}
                quality={50}
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
              <Link
                className={css.button_project}
                href={project.link_github}
                target="_blank"
              >
                {t("projects.link_button_github")}
                <DiGithubBadge className={css.button_icon} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
