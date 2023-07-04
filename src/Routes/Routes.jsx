import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/selects';

export const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(selectIsLogin);
  return isLogin ? children : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }) => {
  const isLogin = useSelector(selectIsLogin);
  return !isLogin ? children : <Navigate to="/" />;
};
