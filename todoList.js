var todoList = (props) => (
	<div>
		<ul>
	    <li>{props.todos[0]}</li>
	    <li>{props.todos[1]}</li>
	    <li>{props.todos[2]}</li>
		</ul>
	</div>
);

var todos=['Learn React', 'Crush Recast.ly', 'Maybe sleep']
 
// adding the list to the window global object
window.todoList = todoList;

// ReactDOM.render(<todoList />, getElementById(''));