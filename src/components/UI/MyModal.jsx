import { Modal, Button } from "react-bootstrap";

function MyModal({
  show,
  onClose,
  title = "Modal Title",
  children,
  onSave,
  showSaveButton = true,
  saveText = "Add",
  closeText = "Close",
}) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          {closeText}
        </Button>

        {showSaveButton && (
          <Button style={{backgroundColor:"#6f42c1"}} onClick={onSave}>
            {saveText}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
