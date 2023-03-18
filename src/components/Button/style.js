import styled from 'styled-components';

export const Button = styled.button`
  width: 70px;
  height: 28px;
  background-color: ${(props) => `${props.backgroundColor}`};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;
