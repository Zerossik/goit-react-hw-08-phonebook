import { UserMenu } from 'components/UserMenu/UserMenu';
import { HomeWrap } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/selects';
export const Home = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <HomeWrap>
      <h1>Welcome to phoneBook</h1>
      {isLogin && <UserMenu />}
    </HomeWrap>
  );
};
