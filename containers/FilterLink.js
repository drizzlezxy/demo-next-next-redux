import {
	connect
} from 'react-redux'
import Imm from 'immutable'

import Link from '../components/TodoLink'
import {
	setVisibilityFilter
} from '../actions/index.js'

const mapStateToProps = ({
	immTodoApp
}, ownProps) => {
	return {
		active: immTodoApp.get('visibilityFilter') === ownProps.filter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleTabClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink