import {createAction} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addTodo = createAction('todos/add', (name, number) => ({
    payload:{
        id: nanoid(),
        name,
        number,
    }
}) );

const changeFilter = createAction('todos/filter');

const deleteTodo = createAction('todos/delete');

export default {addTodo , changeFilter, deleteTodo};