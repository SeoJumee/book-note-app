import styled from 'styled-components';

export const BookItem = styled.div`
  width: 380px;
  height: 200px;
  background-color: #f1f1f5;
  padding: 20px;
  position: relative;

  .title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .author {
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #999999;
  }

  .content {
    font-size: 20px;
  }

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
