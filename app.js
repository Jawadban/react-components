var Bananas = () => <li>Bananas</li>

var GroceryList = () => (
	<div>
		<div>
			<ul>
				<Bananas />
				<li>Stawberries</li>
				<div>{[<li>trump</li>,<li>bernie</li>]}</div>
			</ul>
		</div>
	</div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));