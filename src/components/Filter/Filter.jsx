import { Input } from 'components/PhonebookForm/PhonebookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'redux/phoneBookSlice';
import { selectFilterContacts } from 'redux/selects';
export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContacts); // получаем значение стейта - filter

  return (
    <label>
      Find Contacts by name
      <br />
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => dispatch(filterAction(target.value))}
      />
    </label>
  );
}
