export const createAction = (type) => (payload) => ({ type, payload });

export const createReducer = (handlers, initialState) => (state = initialState, action = null) => (
  handlers[action.type]
    ? handlers[action.type](state, action)
    : state
);
