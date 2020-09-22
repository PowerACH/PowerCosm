import React, { setState, useState } from 'react'
import Modal from 'react-bootstrap/modal'


function modal() {
    const [show, setShow] = useState(false);

    return (
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Update!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>Item Added to Cart</Modal.Body>
            </Modal>
    )
}
export default modal;