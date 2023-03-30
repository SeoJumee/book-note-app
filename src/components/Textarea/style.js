import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  height: ${(props) => `${props.height}px`};
  resize: none;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;
