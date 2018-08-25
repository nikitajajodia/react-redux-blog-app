import actionTypes from './actionTypes';

export function fetchPosts() {
  return {
    type: actionTypes.FETCH_POSTS
  };
}

export function savePost(data) {
	return {
		type: actionTypes.SAVE_POST,
		data
	}
}