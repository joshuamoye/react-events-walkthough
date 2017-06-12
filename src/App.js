// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

//
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


  render() {

    let tasks = this.state.tasks.map((task)=>
      <Todo task={task} />
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
