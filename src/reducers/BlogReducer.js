import { Map, fromJS } from 'immutable';
import actionTypes from '../actions/actionTypes';

const initialState = Map({
	posts: [],
	postCreated: false,
	post: []
});

export default function blogReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_POSTS_SUCCESS: {
			return state.set('posts', action.data)
		}

		case actionTypes.SAVE_POST_SUCCESS: {
			return state.set('postCreated', true);
		}

		case actionTypes.FETCH_POST_SUCCESS: {
			return state.set('post', action.data);
		}

		default:
			return state;
	}
}