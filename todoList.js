
// var todoEntery = (props) => (
// 	//<li>{props}</li>
// );

// var TodoList = () => (
// 		<ul>{ todos.map((todo) => <li>{todo}</li>)}</ul>
// );

// var todos=['Learn React', 'Crush Recast.ly', 'Maybe sleep'];

// ReactDOM.render(<TodoList />, document.getElementById('todoApp'));



var list=['Learn React', 'Crush Recast.ly', 'Maybe sleep'];

var TodoEntery = (props) => <div>{ props.todos.map( (todo) => <li>{todo}</li> ) }</div>

var TodoList = (props) => (
	<ul>
		<TodoEntery todos={props.todos}/>
	</ul>
);

ReactDOM.render(<TodoList todos={list}/>, document.getElementById('todoApp'));
