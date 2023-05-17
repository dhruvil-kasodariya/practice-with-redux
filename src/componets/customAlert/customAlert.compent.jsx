import React, { useState } from "react";
import Modal from "react-modal";

const CustomAlert = ({ message, onConfirm, style }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    onConfirm();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Alert"
      style={style}
    >
      <div>
        <p>{message}</p>
        <button onClick={handleConfirm}>OK</button>
      </div>
    </Modal>
  );
};

export default CustomAlert;
