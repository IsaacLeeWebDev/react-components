// // TODO
// var students = [{name: 'person1'}, {name: 'person2'}, {name: 'person3'}]
// var getStudent = function() {
// 	var randomIndex = Math.floor(Math.random() * students.length);
// 	return students[randomIndex];
// }
// var Profile = (props) => (
// 		<div>
// 			<div>{props.name}</div>
// 		</div>
// 	)

// var s = getStudent();
// ReactDOM.render(<Profile name={s.name}/>, document.getElementById('app'));
// const TodoForm = ({addTodo}) => {
// 	let input;
// 	return (
// 		<div>
// 			<input ref={node => {input=node;}} />
// 			<button onClick={() => {
// 				addTodo(input.value);
// 				input.value='';
// 			}}> Add
// 			</button>
// 		</div>
// 	);
// };
// const Todo = ({todo, remove}) => {
// 	return(<li onClick(remove(todo.id))>(todo.text)</li>);
// }
// const TodoList = ({todos, remove}) => {
// 	const todoNode = todos.map((todo) => {
// 		return (<Todo todo={todo} key={todo.id} remove={remove} />)
// 	})
// 	return(<ul>{todoNode}</ul>);
// }
// const Title = () => {
// 	return (
// 		<div><div>
// 		<h1>To Do List</h1>
// 		</div></div>
// 	)
// }
// window.id = 0;
// class TodoApp extends React.Component{
// 	constructor(props) {
// 		supr(props);
// 			this.state = {
// 				data: [],
// 			}
// 	}
// 	addTodo(val) {
// 		const todo = {text: val, id: window.id++};
// 		this.state.data.push(todo);
// 		this.setState({data: this.state.data});
// 	}
// 	handleRemove(id) {
// 		const remainder = this.state.data.filter((todo) => {
// 			if(todo.id !== id) return todo;
// 		});
// 		this.setState({data: remainder});
// 	}
// 	render() {
// 		return (
// 			<div>
// 			<Title />
// 			<TodoForm addTodo={thisl.addTodo.bind(this)}/>
// 			<TodoList
// 			todos={this.state.data}
// 			remove={this.handleRemove.bind(this)}
// 			/>
// 			</div>
// 		);
// 	}
// }
// function addFunc() {
// 	let item = document.getElementById('addItem').value;
// 	todo.push(item);
// 	console.log(todo);
// }
// document.getElementById('addButton').addEventListener("click", addFunc);
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}
class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: props.todos,
		};
	}
	render() {
		if(this.state.todos.length > 0) {return (
		<div>
	  	<input placeholder='add item' id='addItem' />
		<button id="addButton" onClick={this.addFunc.bind(this)}>add</button>
		  <ul>
		    {this.state.todos.map(todo =>
		      <TodoListItem todo={todo} />
		    )}
		  </ul>
		</div>
		)}
	}
	addFunc() {
		let item = document.getElementById('addItem').value;
		this.setState((state, props) => {
			return {todos: state.todos.concat(item)}
		})

	}
}
	
var App = () => (
  <div>
  <TodoList todos={['hi', 'hello']}/>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));