import {
	VisibilityFilters
} from '../data/actionTypes.js';
import {
	fromJS,
} from 'immutable';

const initialState = fromJS({
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: [{
		text: '初始化任务1',
		completed: false,
	}, {
		text: '初始化任务2',
		completed: true,
	}],
})

export default initialState