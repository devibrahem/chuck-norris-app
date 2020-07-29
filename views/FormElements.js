import styled from "@emotion/styled";

// input field styles
const InputText = styled.input`
  color: #33e;
  font-size: 24px;
  font-weight: bold;
  background-color: transparent;
  padding: 8px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 4px;
`;

const InputSubmit = styled.input`
  border: 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #33e;
  border-radius: 4px;
  padding: 8px;
  margin: 14px 14px 2px 0;
`;

const InputSelect = styled.select`
  color: #33e;
  font-size: 24px;
  font-weight: bold;
  background-color: transparent;
  padding: 8px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 4px;
`;

export { InputText, InputSubmit, InputSelect };
