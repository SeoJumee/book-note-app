import Header from '../../components/Header';
import BookItem from '../../components/BookItem';
import React from 'react';
import Button from '../../components/Button';
import * as S from './style';
import Textarea from '../../components/Textarea';

export default function Home() {
  return (
    <>
      <Header />
      <S.ItemWrapper>
        <S.TextareaWrapper>
          <Textarea placeholder="도서명" height="35" />
          <Textarea placeholder="저자" height="35" />
          <Textarea placeholder="내용" height="100" />
          <Button backgroundColor={'#81C147'}>등록</Button>
        </S.TextareaWrapper>
        <S.BookWrapper>
          <BookItem />
        </S.BookWrapper>
      </S.ItemWrapper>
    </>
  );
}
