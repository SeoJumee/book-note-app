import React from 'react';
import * as S from './style';

export default function Button({ backgroundColor, onClick, children }) {
  return (
    <S.Button backgroundColor={backgroundColor} onClick={onClick}>
      {children}
    </S.Button>
  );
}
