import { Button, Card } from 'react-bootstrap'
import css from './Projects.module.scss'
import { projects } from './content'
import ProjectsModal from './ProjectsModal'
import { useToggle } from 'react-use'

const Projects = (): JSX.Element => {
  const [showModal, toggleModal] = useToggle(false)

  return (
    <div className={css.projects}>
      <h1>Projects</h1>
      <div className={css.projects_content}>
        <div className={css.project_items}>
          {projects.map((project, index) => (
            <Card key={index} className={css.item}>
              <Card.Img
                variant="top"
                src="https://ralfvanveen.com/wp-content/uploads//2021/06/Placeholder-_-Begrippenlijst.svg"
              />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" onClick={toggleModal}>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <ProjectsModal showModal={showModal} toggleModal={toggleModal} />
      </div>
    </div>
  )
}

export default Projects
