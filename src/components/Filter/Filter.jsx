import React from 'react';
import { useDispatch } from 'react-redux';
import changeFilter from '../../redux/todos/todos-reducer';

const Filter = ({filter}) => {
const dispatch = useDispatch();

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        // value={filter}
        onChange={() => dispatch(changeFilter({filter}))}
      />
    </div>
  );
};

export default Filter;
