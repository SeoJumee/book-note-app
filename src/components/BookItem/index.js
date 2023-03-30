import React from 'react';
import * as S from './style';
import Button from '../Button';

export default function BookItem({ key, book, onClick }) {
  return (
    <>
      <S.BookItem key={key} book={book}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        <div className="content">{book.content}</div>
        <svg
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </S.BookItem>
    </>
  );
}
