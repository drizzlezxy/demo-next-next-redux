import {
	Provider
} from 'react-redux';
import {
	createStore,
	applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import todoApp from '../reducers/index.js';
import ImmTodoApp from '../components/TodoApp.js';
import {
	initialState
} from '../data/initialState.js';

let store = createStore(
	todoApp,
	initialState,
	applyMiddleware(thunk)
)

export default () => (
	<Provider store={store}>
        <ImmTodoApp />
	</Provider>
)