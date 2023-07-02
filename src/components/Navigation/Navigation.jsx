import { useSelector } from 'react-redux';
import { StyledLink, StyledList } from './Navigation.styled';
import { selectIsLogin } from 'redux/selects';

export const Navigation = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <nav>
      <StyledList>
        <li>
          <StyledLink to="/" variant="body2">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/login">{isLogin ? 'Logout' : 'Login'}</StyledLink>
        </li>
      </StyledList>
    </nav>
  );
};
