import styled from 'styled-components';

export const BookItem = styled.div`
  width: 380px;
  height: 200px;
  background-color: #f1f1f5;
  padding: 20px;
  position: relative;

  svg {
    position: absolute;
    width: 35px;
    height: 35px;
    top: 15px;
    right: 15px;
    cursor: pointer;
    padding: 5px;
  }
`;
