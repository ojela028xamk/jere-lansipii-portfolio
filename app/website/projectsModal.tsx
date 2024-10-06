import { Fragment } from "react";
import { Project } from "./content";

type ProjectsModalProps = {
  project: Project;
};

const ProjectsModal = ({ project }: ProjectsModalProps): JSX.Element => {
  return (
    <Fragment>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button onClick={() => window.open(project.link, "_blank")}>
        Go to website
      </button>
    </Fragment>
  );
};

export default ProjectsModal;
