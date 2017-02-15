var Bananas = () => <li>Bananas</li>

var GroceryList = () => (
	<div>
		<ul>
			<Bananas />
			<li>Stawberries</li>
		</ul>
	</div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));