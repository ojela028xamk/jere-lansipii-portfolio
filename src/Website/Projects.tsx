import { Button, Card } from 'react-bootstrap'
import css from './Projects.module.scss'
import { Project, projects } from './content'
import ProjectsModal from './ProjectsModal'
import { useToggle } from 'react-use'
import { Fragment, useState } from 'react'

const Projects = (): JSX.Element => {
  const [showModal, toggleModal] = useToggle(false)
  const [selectedProject, setSelectedProject] = useState({} as Project)

  const handleProjectSelect = (project: Project): void => {
    toggleModal()
    setSelectedProject(project)
  }

  return (
    <div className={css.projects}>
      <h1>Projects</h1>
      <div className={css.projects_content}>
        <div className={css.project_items}>
          {projects.map((project, index) => (
            <Fragment key={index}>
              <Card className={css.item}>
                <Card.Img
                  variant="top"
                  src="https://ralfvanveen.com/wp-content/uploads//2021/06/Placeholder-_-Begrippenlijst.svg"
                />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => handleProjectSelect(project)}
                  >
                    Show more
                  </Button>
                </Card.Body>
              </Card>
              <ProjectsModal
                showModal={showModal}
                toggleModal={toggleModal}
                project={selectedProject}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
