import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modals.css";

function PopUp() {
  const [smShow, setSmShow] = useState(true);

  return (
    <>
      {/* <Button onClick={() => setSmShow(true)}>Button</Button>{" "} */}
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>

        <Modal.Body>
          <i class="far fa-check-circle" id="icon"></i>

          <h6 className="button"> Successfully Uploaded</h6>
          <button className="button1" onClick={()=>setSmShow(false)}>Ok</button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUp;
