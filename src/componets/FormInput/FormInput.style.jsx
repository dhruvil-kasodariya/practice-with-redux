import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
  &:focus {
    outline: none;
    border-bottom: 2px solid #000;
  }
`;

export const FormInputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
`;
