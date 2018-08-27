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

export function fetchPost(id) {
	return {
		type: actionTypes.FETCH_POST,
		id
	}
}

export function deletePost(id) {
	return {
		type: actionTypes.DELETE_POST,
		id
	}
}