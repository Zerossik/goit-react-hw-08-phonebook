import { useSelector } from 'react-redux';
import { StyledLink, StyledList, StyledNavigation } from './Navigation.styled';
import { selectIsLogin } from 'redux/selects';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <StyledNavigation>
      <div>
        <StyledList>
          <li>
            <StyledLink to="/" variant="body2">
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to={isLogin ? '/contacts' : '/login'}>
              {isLogin ? 'Contacts' : 'Login'}
            </StyledLink>
          </li>
        </StyledList>
      </div>
      {isLogin && <UserMenu />}
    </StyledNavigation>
  );
};
