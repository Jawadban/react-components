var Bananas = () => <li>Bananas</li>

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			done: false
		}
	}

	toggleState() {
		this.setState({
			done: !this.state.done
		}) 
	} 

	render() {
		var style = {
			textDecoration: this.state? 'line-through': none
		}
		return (
			<li onClick={this.toggleState.bind(this)}>{this.props.person}</li>
		)
	}
}

var GroceryList = () => (
	<div>
		<div>
			<ul>
				<Bananas />
				<li>Stawberries</li>
				<div>{['trump', 'Bernie', 'Santa'].map((person) => <GroceryListItem person={person}/>)}</div>
			</ul>
		</div>
	</div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));

