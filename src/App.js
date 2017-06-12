// Notice that below, I did not include , {Component} after import
// React
import React from 'react';
import Todo from './Todo';


class App extends React.Component {


  constructor(){
    super();

    this.state={
      tasks: ["first", "second", "third"],
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    // Now this.handleDelete can be called with the scoped variables
    this.handleDelete = this.handleDelete.bind(this)
  }


  handleSubmit(e){
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input: '',
    })

  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      input: e.target.value
    })

  }

  // Create a function here that deletes the specific task from the App.js State.
  handleDelete(e){
    // These console logs are just to make sure that this function is being called.
    console.log(e)
    console.log(this.state)
    this.setState({
      tasks: this.state.tasks.filter( (task)=> task !== e)
    })
  }

  render() {

    let tasks = this.state.tasks.map((task)=>
    // Passing in this.handleDelete as a property to Todo.
    // This means that we can call handleDelete from the child component.
      <Todo task={task} del={this.handleDelete}/>
    )

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>

          <input onChange={ this.handleChange } />
          <input type="submit"/>
        </form>

        { tasks }

      </div>
    );
  }
}



export default App;
