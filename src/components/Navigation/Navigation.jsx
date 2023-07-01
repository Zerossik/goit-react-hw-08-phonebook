import { StyledLink, StyledList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <StyledList>
        <li>
          <StyledLink to="/" variant="body2">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/login">Login</StyledLink>
        </li>
      </StyledList>
    </nav>
  );
};
