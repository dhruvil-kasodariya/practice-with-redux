import {
  Container,
  Field,
  Button,
  ButtonContainer,
  Label,
  Value,
} from "./userView.style";
const Userview = ({ userData }) => {
  return (
    <Container>
      {Object.entries(userData).map(([key, value]) => (
        <Field key={key}>
          <Label>{key}:</Label>
          <Value>{value}</Value>
        </Field>
      ))}
    </Container>
  );
};

export default Userview;
