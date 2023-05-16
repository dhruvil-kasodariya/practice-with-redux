import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserList,
  selectSingleUser,
} from "../../store/users/users.selector";
import { setUsers } from "../../store/users/users.action";
import FormInput from "../../componets/FormInput/form-input.componet";
import Button from "../Button/button.componet";
import { Label, FormStyled } from "./form.style";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Form = () => {
  const [data, setData] = useState(initialState);
  const [id, setId] = useState();

  const navigate = useNavigate();

  const users = useSelector(selectUserList);
  const singleUser = useSelector(selectSingleUser);
  const dispatch = useDispatch();

  console.log(singleUser);
  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.id;
    setData({ ...data, [name]: value });
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.email.match(validRegex)
    ) {
      if (!data.name) {
        alert("Enter Name");
      }
      if (!data.email || !data.email.match(validRegex)) {
        if (!data.email) {
          alert("Enter Email");
        } else {
          alert("Enter Correct E-mail");
        }
      }
      if (!data.password) {
        alert("Enter Password");
      }
    } else {
      if (Object.keys(singleUser).length) {
        users.splice(id, 1, data);
        dispatch(setUsers(users));
        navigate("/home");
      } else {
        const user = [...users, data];
        dispatch(setUsers(user));
        navigate("/home");
      }
    }
  };

  useEffect(() => {
    Object.keys(singleUser).length && setData(singleUser);
    Object.keys(singleUser).length && users && setId(users.indexOf(singleUser));
  }, [singleUser, users]);

  return (
    <>
      <Label>Registration Form</Label>
      <FormStyled onSubmit={handleSubmitClick}>
        <FormInput
          required
          id="name"
          label="Name"
          type="text"
          placeholder="Enter your name here..."
          onChange={handleInputChange}
          value={"" || data.name}
        />
        <FormInput
          required
          type="email"
          id="email"
          label="Email"
          placeholder="Enter your email here..."
          onChange={handleInputChange}
          value={"" || data.email}
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
          value={"" || data.password}
        />
        <Button
          children={Object.keys(singleUser).length ? "update" : "submit"}
          type="submit"
        ></Button>
      </FormStyled>
    </>
  );
};

export default Form;
