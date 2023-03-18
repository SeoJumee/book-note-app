import * as S from './style';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <Link to="/">
        <S.HeaderName>📚Book’s tory</S.HeaderName>
      </Link>
    </S.HeaderWrapper>
  );
}
