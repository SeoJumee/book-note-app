import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: #81c147;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
  }
  svg {
    width: 30px;
    height: 30px;
    margin-right: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const HeaderName = styled.h3`
  height: 70px;
  display: flex;
  margin-left: 100px;
  align-items: center;
`;
