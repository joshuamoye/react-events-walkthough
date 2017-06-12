import React from 'react';



class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false
    }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick(e){
      // We're going to use the function in our props
      // to pass information back to the parent
      this.props.del(this.props.task)
  }


  handleClick(e){
    e.preventDefault();
    this.setState({
      complete: true
    })

  }


// Don't worry about the code below.
// There was a bug in the app where if you click complete on a task and then
// delete the task, the following task was marked complete.
// This function below prevents that behaviour from happenning.
// to learn more about how this method works below, check out react lifecycles.
// Docs-----
// https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops
componentWillReceiveProps(nextProps){
  if(nextProps !== this.props){
    this.setState({
      complete: false
    })
  }
}


render(){
  return(
    !this.state.complete ?

    <div>
      <li>{this.props.task}

        <button onClick={ this.handleDeleteClick }>Delete</button>

        <button onClick={ (event)=> this.handleClick(event) }>complete</button>
      </li>
      <br></br>
      mission not complete
    </div>
    :
    <div>
      <li>{this.props.task}
        <button onClick={ this.handleDeleteClick }>Delete</button>
      </li>
      <br></br>
      mission complete
    </div>
    )
  }
}



export default Todo;
