import { createAction, createReducer } from './helper';

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const changeFilter = createAction(CHANGE_FILTER);

const initialState = 'all';

export default createReducer({
  [CHANGE_FILTER]: (state, { payload: filter }) => filter,
}, initialState);