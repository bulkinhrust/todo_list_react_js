import { put, call, takeEvery } from 'redux-saga/effects';
import { loadingChange, FETCH_TASKS, setTasks } from '../reducers/tasks';

const delay = time => new Promise(resolve => setTimeout(resolve, time));

async function fetchTasks() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  return res.json();
}

function* fetchTasksWorker() {
  try {
    yield put(loadingChange(true));
    const payload = yield call(fetchTasks);
    yield call(delay, 1000); // imitate long api request
    yield put(setTasks(payload));
    yield put(loadingChange(false));
  } catch (e) {
    console.error(e)
  }

}

export function* fetchTasksWatcher() {
  yield takeEvery(FETCH_TASKS, fetchTasksWorker)
}