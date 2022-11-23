import { Fragment } from "react";

const Modal = (props) => {
  const hideModal = () => {
    props.setShowModal(false);
  };

  return (
    <Fragment>
      <div id="message-modal" className="modal-background">
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-title-close">
              Message
              <span className="close" title="Close" onClick={hideModal}>
                &times;
              </span>
            </div>
          </div>
          <div className="modal-all-content">
            <p className="message">{props.message}</p>
            <button
              type="submit"
              className="message-btn"
              title="OK"
              onClick={hideModal}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
