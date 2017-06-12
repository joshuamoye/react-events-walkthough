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
      this.props.del(this.props.task)
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      complete: true
    })

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
      </li>
      <br></br>
      mission complete
    </div>
    )
  }
}



export default Todo;
