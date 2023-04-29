import Header from '../../components/Header';
import BookItem from '../../components/BookItem';
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import * as S from './style';
import Textarea from '../../components/Textarea';

export default function Home() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    content: '',
  });

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(
      localStorage.getItem('book')
        ? JSON.parse(localStorage.getItem('book'))
        : []
    );
  }, [book]);

  function onChange(e) {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  }

  function onCreate() {
    const parseBook = localStorage.getItem('book')
      ? JSON.parse(localStorage.getItem('book'))
      : [];

    if (!book.title || !book.author || !book.content) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    localStorage.setItem('book', JSON.stringify([...parseBook, book]));

    setBook({ title: '', author: '', content: '' });

    alert('등록되었습니다.');

    setBook({
      title: '',
      author: '',
      content: '',
    });
  }

  function onDelete(index) {
    const parseBook = localStorage.getItem('book')
      ? JSON.parse(localStorage.getItem('book'))
      : [];

    parseBook.splice(index, 1);
    // setBookList(parseBook.filter((bookList, i) => i !== index));
    // delete parseBook[index];
    // delete parseBook['index'];
    localStorage.setItem('book', JSON.stringify(parseBook));
    setBookList(parseBook);
  }

  return (
    <>
      <Header />
      <S.ItemWrapper>
        <S.TextareaWrapper>
          <Textarea
            name="title"
            onChange={onChange}
            value={book.title}
            placeholder="도서명"
            height="35"
          />
          <Textarea
            name="author"
            onChange={onChange}
            value={book.author}
            placeholder="저자"
            height="35"
          />
          <Textarea
            name="content"
            onChange={onChange}
            value={book.content}
            placeholder="내용"
            height="100"
          />
          <Button backgroundColor={'#81C147'} onClick={onCreate}>
            등록
          </Button>
        </S.TextareaWrapper>
        <S.BookWrapper>
          {bookList.map((book, index) => (
            <BookItem key={index} book={book} onClick={() => onDelete(index)}>
              {book.title}
              {book.author}
              {book.content}
            </BookItem>
          ))}
        </S.BookWrapper>
      </S.ItemWrapper>
    </>
  );
}
