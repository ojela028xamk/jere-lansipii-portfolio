import { Button, Modal } from 'react-bootstrap'

type ProjectsModalProps = {
  showModal: boolean
  toggleModal: () => void
}

const ProjectsModal = ({
  showModal,
  toggleModal,
}: ProjectsModalProps): JSX.Element => {
  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
        <Button variant="primary" onClick={toggleModal}>
          Go to website
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectsModal
