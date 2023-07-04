import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selects';
import { logoutThunk } from 'redux/thunks';
import { StyledBtn, StyledText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAuth);
  return (
    <div>
      <StyledText> Welcom {name}</StyledText>
      <StyledBtn
        type="button"
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Logout
      </StyledBtn>
    </div>
  );
};
