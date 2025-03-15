import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, card }) => {
  if (!card) return;
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className={css.imgDiv}>
          <img
            className={css.img}
            src={card.urlRegular}
            alt={card.description}
          />
        </div>
        <button className={css.button} onClick={onClose}>
          <IoClose />
        </button>
      </Modal>
    </>
  );
};

export default ImageModal;
