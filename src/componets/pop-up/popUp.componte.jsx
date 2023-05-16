import React, { Fragment, useState } from "react";
import UserView from "../userView/userView.componet";
import "./popUp.style.css";

const PopUp = ({ type, rowData }) => {
  const [modal, setModal] = useState(false);

  const handleModel = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <Fragment>
      <button onClick={handleModel} className="btn-add">
        {type}
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={handleModel} />
          <div className="modal-content">
            <UserView userData={rowData} />

            <button className="btn-close" onClick={handleModel}>
              X
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PopUp;
