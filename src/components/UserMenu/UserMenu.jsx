import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selects';
import { logoutThunk } from 'redux/thunks';
import axios from 'axios';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAuth);
  return (
    <div>
      <i> Welcom {name}</i>
      <button
        type="button"
        onClick={() => {
          console.log(axios.defaults.headers.common);
          dispatch(logoutThunk());
        }}
      >
        Logout
      </button>
    </div>
  );
};
