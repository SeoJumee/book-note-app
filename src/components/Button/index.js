import React from 'react';
import * as S from './style';

export default function Button({ backgroundColor, children }) {
  return <S.Button backgroundColor={backgroundColor}>{children}</S.Button>;
}
