import { useDispatch, useSelector } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';

const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(state => state.todos.filter);
const todos = useSelector(state => state.todos.items);


const onFilterChange = e => {
  const normalizedFilter = e.currentTarget.value.toLowerCase();
  console.log(normalizedFilter)
  const visibleContacts = todos.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(visibleContacts)
  dispatch(todosActions.changeFilter(normalizedFilter));
  // dispatch(todosActions.addTodo(visibleContacts))
}


  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filter;
