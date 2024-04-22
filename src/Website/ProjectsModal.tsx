import { Button, Modal } from 'react-bootstrap'
import { Project } from './content'

type ProjectsModalProps = {
  showModal: boolean
  toggleModal: () => void
  project: Project
}

const ProjectsModal = ({
  showModal,
  toggleModal,
  project,
}: ProjectsModalProps): JSX.Element => {
  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>{project.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{project.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => window.open(project.link, '_blank')}
        >
          Go to website
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectsModal
