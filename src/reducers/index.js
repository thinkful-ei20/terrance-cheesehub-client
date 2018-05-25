import { combineReducers } from 'redux';
import { cheesesReducer } from './cheese';

const rootReducer = combineReducers(
	{
		cheesesReducer
	}
);

export default rootReducer;