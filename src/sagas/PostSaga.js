import {
  take,
  put,
  fork,
  call
} from 'redux-saga/effects';

import { get } from '../api';

import actionTypes from '../actions/actionTypes';

import Config from '../config';

const {
  API_KEY
} = Config;


function* fetchPosts() {
  while (true) {
    const {
      city 
    } = yield take(actionTypes.FETCH_POSTS);
    const response = yield call(get, `posts${API_KEY}`, null, null);
    yield put({
      type: actionTypes.FETCH_POSTS_SUCCESS,
      ...response
    })
  }
}

export default function* () {
  yield fork(fetchPosts);
}