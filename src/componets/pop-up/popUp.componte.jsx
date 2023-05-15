import React, { useState } from "react";
import UserView from "../userView/userView.componet";

import "./popUp.style.css";

const PopUp = ({ id, btnAdd, btnEdit, loadData }) => {
  const [modal, setModal] = useState(false);

  const handleModel = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  //  {btnAdd}
  //       {btnEdit}
  return (
    <>
      <button onClick={handleModel} className="btn-add">
        View
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={handleModel} />
          <div className="modal-content">
            <UserView />
            <button className="btn-close" onClick={handleModel}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
