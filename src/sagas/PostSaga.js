import {
  take,
  put,
  fork,
  call
} from 'redux-saga/effects';

import { get, post, deleteCall } from '../api';

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

function* savePost() {
  while (true) {
    const data = yield take(actionTypes.SAVE_POST);
    const payload = data.data.toJS();
    const response = yield call(post, `posts${API_KEY}`, payload , null);
    if(response.status == 201) {
      yield put({
        type: actionTypes.SAVE_POST_SUCCESS
      })
    }
  }
}

function* fetchPost() {
  while (true) {
    const {
      id 
    } = yield take(actionTypes.FETCH_POST);
    const response = yield call(get, `posts/${id}${API_KEY}`, null, null);
    yield put({
      type: actionTypes.FETCH_POST_SUCCESS,
      ...response
    })
  }
}

function* deletePost() {
  while (true) {
    const {
      id 
    } = yield take(actionTypes.DELETE_POST);
    const response = yield call(deleteCall, `posts/${id}${API_KEY}`, null, null);
    yield put({
      type: actionTypes.DELETE_POST_SUCCESS,
      ...response
    })
  }
}

export default function* () {
  yield fork(fetchPosts);
  yield fork(savePost);
  yield fork(fetchPost);
  yield fork(deletePost);
}