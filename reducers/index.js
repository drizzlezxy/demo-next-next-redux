import {
	combineReducers
} from 'redux-immutable';
import todos from './todo.js';
import visibilityFilter from './visibilityFilter.js';


const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp