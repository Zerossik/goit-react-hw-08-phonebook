import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Section } from 'components/Section/Section';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin, selectToken } from 'redux/selects';
import { getUserThunk } from 'redux/thunks';
import { token } from '../../services/api';
export const Shared = () => {
  const access_token = useSelector(selectToken);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token && !isLogin) {
      token.setToken(access_token);
      dispatch(getUserThunk());
    }
  }, [access_token, dispatch, isLogin]);
  return (
    <main>
      <Section>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Section>
    </main>
  );
};
