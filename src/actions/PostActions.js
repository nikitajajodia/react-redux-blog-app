import actionTypes from './actionTypes';

export function fetchPosts() {
  return {
    type: actionTypes.FETCH_POSTS
  };
}