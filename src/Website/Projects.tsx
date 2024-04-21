import { Button, Card } from 'react-bootstrap'
import css from './Projects.module.scss'
import { projects } from './content'

const Projects = (): JSX.Element => {
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
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
