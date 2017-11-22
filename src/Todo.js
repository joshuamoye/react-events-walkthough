import React from 'react';



class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false
    }
    // manualling bind your functions here

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
  console.log('d')
  if (nextProps !==this.props){
    this.setState({
      complete: false
    })
  }
}



shouldComponentUpdate(nextProps, nextState){
  console.log('a');
  return true
}
componentWillUpdate(nextProps, nextState){
 console.log('b');
}

componentDidUpdate(prevProps,prevState){
  console.log('c');
}

componentWillMount(){
  console.log('e')
}

componentDidMount(){
  console.log('f')
}


render(){
  return(
    !this.state.complete ?

    <div>
      <li>{this.props.task}
      {/* change  the below code from a function to a variable */}
        <button onClick={ ()=>this.props.del(this.props.task) }>Delete</button>

        <button onClick={ (event)=> this.handleClick(event) }>complete</button>
      </li>
      <br></br>
      mission not complete
    </div>
    :
    <div>
      <li>{this.props.task}
      {/* change  the below code from a function to a variable */}
        <button onClick={ ()=>this.props.del(this.props.task) }>Delete</button>
      </li>
      <br></br>
      mission complete
    </div>
    )
  }
}



export default Todo;
