import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const configureStore = initialState => (
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
  )
);

const store = configureStore({});

export default store;