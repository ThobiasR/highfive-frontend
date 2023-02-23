import Modal from "react-bootstrap/Modal";

export default function GasModal(props) {
  const { setShow, show } = props;

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w gas-modal"
      centered
    >
      <Modal.Body>
        <div className="row feature-info-modal">
          <div className="d-flex w-100">
            <div className="align-self-center col-9">
              {" "}
              <h3 className="heading mb-0">Wat zijn gas fees?</h3>
            </div>
            <div className="align-self-center col-3 text-end">
              <img
                src="/img/feature-cross.svg"
                onClick={() => setShow(false)}
                style={{ cursor: "pointer", width: 30 }}
              />
            </div>
          </div>
          <div className="d-flex w-100 mt-3">
            <div className="col-12">
              <p className="mb-3">
                Gas fees zijn betalingen van gebruikers om te compenseren voor
                de rekenkracht die nodig is om transacties te verwerken en
                valideren op de Ethereum blockchain.
              </p>
              <button
                onClick={() => setShow(false)}
                style={{ cursor: "pointer" }}
                className="btn btn-primary d-flex w-100 justify-content-center"
                alt="Buy now"
                title="Buy now"
              >
                Ik snap het
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
