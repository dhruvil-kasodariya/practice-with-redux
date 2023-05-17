import React, { Fragment, useState } from "react";
import UserView from "../userView/userView.componet";
import {
  ButtonAdd,
  Modal,
  ModalContent,
  ButtonClose,
  Overlay,
  ActiveModalBody,
} from "./popUp.style.jsx";

const PopUp = ({ type, rowData }) => {
  const [modal, setModal] = useState(false);

  const handleModel = () => {
    setModal(!modal);
  };

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    <Fragment>
      <ButtonAdd onClick={handleModel} className="btn-add">
        {type}
      </ButtonAdd>

      {modal && (
        <Modal>
          <Overlay onClick={handleModel} />
          <ModalContent>
            <UserView userData={rowData} />

            <ButtonClose onClick={handleModel}>X</ButtonClose>
          </ModalContent>
        </Modal>
      )}
      {modal && <ActiveModalBody className="active-modal" />}
    </Fragment>
  );
};

export default PopUp;
