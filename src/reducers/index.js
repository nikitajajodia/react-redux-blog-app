import { combineReducers } from 'redux-immutable';
import {
  reducer as form
} from 'redux-form/immutable';

import blogObject from './BlogReducer';

export default combineReducers({
	blogObject,
	form 
});