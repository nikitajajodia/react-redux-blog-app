import {
  fork
} from 'redux-saga/effects';

import Post from './PostSaga';

export default function* root() {
	yield fork(Post);
};