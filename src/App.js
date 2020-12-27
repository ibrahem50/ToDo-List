import React , {Component} from 'react';
import Todos from './Todos';
class App extends Component {
  state ={
    todos:[
      {id:1,content:'buy bread'},
      {id:2,content:'play fifa'},
    ]
  }
  deleteTodo=(id)=>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  render(){
  return (
    <div className="todo-app container">
    <h1 className="center blue-text">Todo's</h1>
    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    <h2 className="center blue-text">Click On Todo To Remove it From List</h2>
    </div>
    );
  }
}

export default App;
