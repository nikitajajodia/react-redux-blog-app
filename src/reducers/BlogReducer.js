import { Map, fromJS } from 'immutable';
import actionTypes from '../actions/actionTypes';

const initialState = Map({
	posts: [],
	postCreated: false,
	postDeleted: false,
	post: []
});

export default function blogReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_POSTS_SUCCESS: {
			return state.set('posts', action.data)
		}

		case actionTypes.SAVE_POST: {
			return state.set('postCreated', false);
		}

		case actionTypes.SAVE_POST_SUCCESS: {
			return state.set('postCreated', true);
		}

		case actionTypes.FETCH_POST_SUCCESS: {
			return state.set('post', action.data);
		}

		case actionTypes.DELETE_POST: {
			return state.set('postDeleted', false)
		}

		case actionTypes.DELETE_POST_SUCCESS: {
			const newPosts = state.get('posts').filter((post) => {
				return post.id != action.data.id
			})
			return state.set('postDeleted', true)
						.set('posts', newPosts)
		}

		default:
			return state;
	}
}