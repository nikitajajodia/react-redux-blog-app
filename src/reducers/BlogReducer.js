import { Map, fromJS } from 'immutable';
import actionTypes from '../actions/actionTypes';

const initialState = Map({
	posts: []
});

export default function blogReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_POSTS_SUCCESS: {
			return state.set('posts', action.data)
		}

		default:
			return state;
	}
}