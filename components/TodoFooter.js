import FilterLink from '../containers/FilterLink'

import {
	VisibilityFilters
} from '../data/actionTypes.js'

const Footer = () => {
	let {
		SHOW_ALL,
		SHOW_COMPLETED,
		SHOW_ACTIVE
	} = VisibilityFilters
	return (
		<div className="m-select">
			<strong>显示：</strong>
			<FilterLink filter = {SHOW_ALL}> 全部 </FilterLink> 
			<FilterLink filter = {SHOW_COMPLETED}> 已完成 </FilterLink> 
			<FilterLink filter = {SHOW_ACTIVE}> 未完成 </FilterLink> 
	 	</div>
	)
}

export default Footer