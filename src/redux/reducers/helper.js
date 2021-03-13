export const createAction = (type) => (payload) => ({ type, payload });

export const createAsyncAction = (type) => (payload) => {
  return async dispatch => {
    const response = await fetch(payload.url);
    const json = await response.json();
    dispatch({ type, payload: json })
  }
};

export const createReducer = (handlers, initialState) => (state = initialState, action = null) => (
  handlers[action.type]
    ? handlers[action.type](state, action)
    : state
);
