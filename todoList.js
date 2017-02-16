var TodoList = (props) => (
	<div>
		<ul>
	    <li>{props.todos[0]}</li>
	    <li>{props.todos[1]}</li>
	    <li>{props.todos[2]}</li>
		</ul>
	</div>
);

// var todos=['Learn React', 'Crush Recast.ly', 'Maybe sleep']
 
// adding the list to the window global object
window.TodoList = TodoList;
//window.todos = todos;
// ReactDOM.render(<todoList />, getElementById(''));