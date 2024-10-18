import css from "./projects.module.scss";
import { projects } from "./content";
import Image from "next/image";
import Link from "next/link";

const Projects = (): JSX.Element => {
  return (
    <div className={css.projects}>
      <div className={css.projects_content}>
        <h1>Projects</h1>
        <div className={css.project_items}>
          {projects.toReversed().map((project, index) => (
            <div key={index} className={css.project_card}>
              <Image
                className={css.project_image}
                src="https://ralfvanveen.com/wp-content/uploads//2021/06/Placeholder-_-Begrippenlijst.svg"
                alt={"Project image"}
                width={0}
                height={0}
                layout="responsive"
              />
              <span className={css.project_name}>{project.name}</span>
              <p>{project.description}</p>
              <Link
                className={css.button_project}
                href={project.link}
                target="_blank"
              >
                Open Website
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
