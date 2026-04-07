import css from "./projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { DiGithubBadge } from "react-icons/di";
import { FiTool } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

type Project = {
  translateKey: string;
  categories: string[];
  image: string;
  link: string;
  link_info?: string;
};

const projects: Project[] = [
  {
    translateKey: "project1",
    categories: ["category_data", "category_ai"],
    image: "/sentiment_images/sentiment_project.png",
    link: "https://jere-lansipii-portfolio.vercel.app/sentiment_project",
    link_info: "https://github.com/ojela028xamk/guitar-dictionary",
  },
  {
    translateKey: "project2",
    categories: ["category_data"],
    image: "/powerbi_dashboard.PNG",
    link: "https://jere-lansipii-portfolio.vercel.app/powerbi_project",
  },
  {
    translateKey: "project3",
    categories: ["category_website", "category_ai"],
    image: "/band_template.png",
    link: "https://metal-band-template.vercel.app/",
    link_info: "https://github.com/ojela028xamk/metal-band-template",
  },
  {
    translateKey: "project4",
    categories: ["category_website"],
    image: "/guitar_dictionary.png",
    link: "https://guitar-dictionary.vercel.app/",
    link_info: "https://github.com/ojela028xamk/guitar-dictionary",
  },
];

const Projects = (): JSX.Element => {
  const t = useTranslations("website");

  return (
    <div className={css.projects}>
      <div className={css.projects_content}>
        <h1>{t("projects.header")}</h1>
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
              <div className={css.project_content}>
                <span className={css.project_name}>
                  {t(`projects.${project.translateKey}.name`)}
                </span>
                <div className={css.project_categories}>
                  {project.categories.map((category) => (
                    <span key={category} className={css.project_category}>
                      {t(`projects.${category}`)}
                    </span>
                  ))}
                </div>
                <p className={css.project_description}>
                  {t(`projects.${project.translateKey}.description`)}
                </p>
                <Link
                  className={css.button_project}
                  href={project.link}
                  target="_blank"
                >
                  {t("projects.button_website")}
                  <IoOpenOutline className={css.button_icon} />
                </Link>
                {project.link_info && (
                  <Link
                    className={css.button_project}
                    href={project.link_info}
                    target="_blank"
                  >
                    {t("projects.button_info")}
                    <FiTool className={css.button_icon} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
