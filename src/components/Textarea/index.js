import * as S from './style';
import React from 'react';

export default function Textarea({
  name,
  onChange,
  value,
  placeholder,
  height,
}) {
  return (
    <S.Textarea
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      height={height}
    />
  );
}
