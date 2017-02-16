var Bananas = () => <li>Bananas</li>

var todos=['Learn React', 'Crush Recast.ly', 'Maybe sleep'];

var todoList = todos.map((todo) => 
	<li>{todo}</li>
);
  	
var GroceryList = () => (
	<div>
		<div>
			<ul>
				<Bananas />
				<li>Stawberries</li>
			</ul>
		</div>
		<div>
			<ul>{todoList}</ul>
		</div>
	</div>
);

console.log(todos);

ReactDOM.render(<GroceryList />, document.getElementById('app'));