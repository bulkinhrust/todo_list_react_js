import { createAction, createReducer } from './helper';

export const LOADING_CHANGE = 'LOADING_CHANGE';
export const SET_TASKS = 'SET_TASKS';
export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const CLEAR_COMPLETED_TASKS = 'CLEAR_COMPLETED_TASKS';

export const loadingChange = createAction(LOADING_CHANGE);
export const setTasks = createAction(SET_TASKS);
export const fetchTasks = createAction(FETCH_TASKS);
export const addTask = createAction(ADD_TASK);
export const removeTask = createAction(REMOVE_TASK);
export const completeTask = createAction(COMPLETE_TASK);
export const clearCompletedTasks = createAction(CLEAR_COMPLETED_TASKS);

const initialState = {
  isLoading: false,
  tasks: []
};

export default createReducer({
  [LOADING_CHANGE]: (state, { payload: isLoading }) => ({...state, isLoading}),
  [SET_TASKS]: (state, { payload: tasks }) => ({...state, tasks: [...tasks]}),
  [ADD_TASK]: (state, { payload: task }) => ({
    ...state,
    tasks: [...state.tasks, task]
  }),
  [REMOVE_TASK]: (state, { payload: id }) => ({
    ...state,
    tasks: [...state.tasks].filter(task => task.id !== id)
  }),
  [COMPLETE_TASK]: (state, { payload: id }) => ({
    ...state,
    tasks: [...state.tasks].map(task => task.id === id
      ? { ...task, isCompleted: !task.isCompleted }
      : task
    )
  }),
  [CLEAR_COMPLETED_TASKS]: (state) => ({
    ...state,
    tasks: [...state.tasks].filter(task => !task.isCompleted)
  }),
}, initialState);
