import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const Field = styled.div`
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
`;
export const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

export const Value = styled.div`
  font-size: 16px;
  color: #333;
`;
