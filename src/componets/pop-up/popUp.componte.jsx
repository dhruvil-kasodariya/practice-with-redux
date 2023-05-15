import React, { Fragment, useState } from "react";
import UserView from "../userView/userView.componet";

import "./popUp.style.css";
import Form from "../Form/form.componet";

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
      {type === "View" && (
        <button onClick={handleModel} className="btn-add">
          {type}
        </button>
      )}
      {type === "Update" && (
        <button onClick={handleModel} className="btn-update">
          {type}
        </button>
      )}
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={handleModel} />
          <div className="modal-content">
            {type === "View" && <UserView userData={rowData} />}
            {type === "Update" && <Form userData={rowData} type={type} />}
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
