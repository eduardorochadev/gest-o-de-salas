import styled from "styled-components";


export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid #DDDDDD;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 16px;
  outline: none;
  &:focus{
    border-color: blueviolet;
  }
`;