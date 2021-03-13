import { createAction, createAsyncAction, createReducer } from './helper';

export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const CLEAR_COMPLETED_TASKS = 'CLEAR_COMPLETED_TASKS';

export const fetchTasks = createAction(FETCH_TASKS);
export const addTask = createAction(ADD_TASK);
export const removeTask = createAction(REMOVE_TASK);
export const completeTask = createAction(COMPLETE_TASK);
export const clearCompletedTasks = createAction(CLEAR_COMPLETED_TASKS);

const initialState = [];

export default createReducer({
  [FETCH_TASKS]: (state, { payload: tasks }) => tasks,
  [ADD_TASK]: (state, { payload: task }) => ([
    ...state,
    task
  ]),
  [REMOVE_TASK]: (state, { payload: id }) => ([...state].filter(task => task.id !== id)),
  [COMPLETE_TASK]: (state, { payload: id }) => ([...state].map(task => task.id === id
    ? { ...task, isCompleted: !task.isCompleted }
    : task
  )),
  [CLEAR_COMPLETED_TASKS]: (state) => ([...state].filter(task => !task.isCompleted)),
}, initialState);
