import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selects';

export const UserMenu = () => {
  const { name } = useSelector(selectAuth);
  return (
    <div>
      <p>{name}</p>
      <button type="button">Logout</button>
    </div>
  );
};
