var todoList = (props) => (
	<div>
		<ul>
	    <li>{props.todos[0]}</li>
	    <li>{props.todos[1]}</li>
	    <li>{props.todos[2]}</li>
		</ul>
	</div>
);

 
ReactDOM.render(<todoList />, getElementById(''));