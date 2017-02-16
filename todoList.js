
var list=['Learn React', 'Render Components', 'Maybe sleep'];

var TodoEntery = (props) => {

	var onClickThisHappens = (event) => console.log(event)

	return <div>{ props.todos.map( (todo) => <li onClick={onClickThisHappens}>{todo}</li> ) }</div>
}

var TodoList = (props) => (
	<ul>
		<TodoEntery todos={props.todos}/>
	</ul>
);

ReactDOM.render(<TodoList todos={list}/>, document.getElementById('todoApp'));


// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class TodoListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li>{this.props.todo}</li>
    );

  }

}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);







