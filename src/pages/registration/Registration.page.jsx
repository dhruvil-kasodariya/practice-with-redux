import React from "react";
import { Link } from "react-router-dom";
import Button from "../../componets/Button/button.componet";
import Form from "../../componets/Form/form.componet";
import { Container, Wraper } from "./registration.style";

const Registration = () => {
  return (
    <Container>
      <Wraper>
        <Form />
        <Button>
          <Link to={"/home"}>Home</Link>
        </Button>
      </Wraper>
    </Container>
  );
};

export default Registration;
