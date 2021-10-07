import React from 'react'
import Modal from 'react-bootstrap/Modal'

const Explanation = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {props.explanation}
            </p>
          </Modal.Body>
        </Modal>
      );
    }


export default Explanation
