import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { fetchTasksWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware();
const configureStore = initialState => (
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
);

const store = configureStore({});

sagaMiddleware.run(fetchTasksWatcher);

export default store;