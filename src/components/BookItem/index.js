import React from 'react';
import * as S from './style';

export default function BookItem({ key, book }) {
  return (
    <>
      <S.BookItem key={key} book={book}>
        <h3>{book.title}</h3>
        <b>{book.author}</b>
        <div>{book.content}</div>
      </S.BookItem>
    </>
  );
}
