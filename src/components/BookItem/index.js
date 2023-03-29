import React from 'react';
import * as S from './style';
import Button from '../Button';

export default function BookItem({ key, book }) {
  return (
    <>
      <S.BookItem key={key} book={book}>
        <h3>{book.title}</h3>
        <b>{book.author}</b>
        <div>{book.content}</div>
        <Button backgroundColor="#67A700">삭제</Button>
      </S.BookItem>
    </>
  );
}
