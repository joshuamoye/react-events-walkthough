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
    //manualling bind your functions here
    this.handleSubmit= this.handleSubmit.bind(this)
    this.handleChange= this.handleChange.bind(this)
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

  handleDelete(e){
    this.setState({
      tasks: this.state.tasks.filter( (task)=> task !== e)
    })
  }

  render() {

    let tasks = this.state.tasks.map((task, index)=>
      // Change this passed in function
      <Todo key={index} task={task} del={ (e)=>this.handleDelete(e)}/>
    )

    return (
      <div>
      {/*Change this passed in function */}
        <form> {/*Submit={ (event)=>this.handleSubmit(event) }*/}

          <input onChange={ (event)=>this.handleChange(event) } />
          <input type="submit"/>
        </form>

        { tasks }

      </div>
    );
  }
}



export default App;
