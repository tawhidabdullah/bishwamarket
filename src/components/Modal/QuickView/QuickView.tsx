import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

// import backdrop element
import { BackDrop } from "../../elements/Backdrop";
// import button
import { DrawerButton } from "../../common/Button/DrawerButton";
// import drawer header element
import DrawerHeader from "../../Drawer/DrawerElements/DrawerHeader";

// import dummy image
// import wishListImage from "../../../assets/wishListDrawerImage.jpg";

const QuickViewModal = ({ open, handleClose }) => {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuickViewModal;

const QuickViewModalContainer = styled.div``;
