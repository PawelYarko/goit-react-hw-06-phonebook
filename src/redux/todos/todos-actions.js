import {createAction} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addTodo = createAction('todos/add', (payload) => ({
    payload:{
        id: nanoid(),
        ...payload
    }
}) );

const changeFilter = createAction('todos/filter');

const deleteTodo = createAction('todos/delete');
// eslint-disable-next-line
export default {addTodo , changeFilter, deleteTodo};