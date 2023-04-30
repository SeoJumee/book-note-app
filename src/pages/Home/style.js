import styled from 'styled-components';

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: solid 2px #ccc;
  overflow: hidden;
  width: 400px;
  padding: 10px;
  align-items: flex-end;
  height: 200px;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 50px 0 0 40px;
`;

export const BookWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-left: 40px;
`;
