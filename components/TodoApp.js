import Footer from '../components/TodoFooter.js'
import AddTodo from '../containers/AddTodo.js'
import VisibleTodoList from '../containers/VisibleTodoList.js'

const App = () => (
	<div>
		<h2>Immutable-App</h2>
	    <AddTodo/>
	    <VisibleTodoList />
	    <Footer/>
	</div>
)

export default App