import styled from "styled-components";

export const ButtonAdd = styled.button`
  background-color: green;
  border-radius: 5px;
  height: 5%;
  padding: 1% 5%;
  margin-right: 10%;
  font-size: large;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const Overlay = styled.div`
  background: rgba(49, 49, 49, 0.8);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
  text-align: left;
`;

export const ButtonClose = styled.button`
  background-color: red;
  color: azure;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 7px;
  cursor: pointer;
`;

export const ActiveModalBody = styled.body`
  overflow: hidden;
`;

/* .btn-add {
  background-color: green;
  border-radius: 5px;
  height: 5%;
  padding: 1% 5%;
  margin-right: 10%;
  font-size: large;
  align-items: center;
  cursor: pointer;
}

.btn-add:hover {
  background-color: gray;
}

.modal,
.overlay {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}

.overlay {
  background: rgba(49, 49, 49, 0.8);
}
.modal-content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
  text-align: left;
}

.btn-close {
  background-color: red;
  color: azure;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 7px;
  cursor: pointer;
}

body.active-modal {
  overflow: hidden;
} */
