"use client";
import css from "./projects.module.scss";
import { Project, projects } from "./content";
import { useToggle } from "react-use";
import { useState } from "react";
import Image from "next/image";
import Modal from "react-responsive-modal";
import ProjectsModal from "./projectsModal";
import "react-responsive-modal/styles.css";

const Projects = (): JSX.Element => {
  const [showModal, toggleModal] = useToggle(false);
  const [selectedProject, setSelectedProject] = useState({} as Project);

  const handleProjectSelect = (project: Project): void => {
    toggleModal();
    setSelectedProject(project);
  };

  return (
    <div className={css.projects}>
      <h1>Projects</h1>
      <div className={css.projects_content}>
        <div className={css.project_items}>
          {projects.map((project, index) => (
            <div key={index} className={css.project_card}>
              <Image
                src="https://ralfvanveen.com/wp-content/uploads//2021/06/Placeholder-_-Begrippenlijst.svg"
                alt={"Project image"}
                width={0}
                height={0}
                layout="responsive"
              />
              <h5>{project.name}</h5>
              <button onClick={() => handleProjectSelect(project)}>
                Show more
              </button>
              <Modal open={showModal} onClose={toggleModal} center>
                <ProjectsModal project={selectedProject} />
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
