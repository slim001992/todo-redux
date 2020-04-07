import React, { Component } from 'react'
import {connect} from "react-redux"
import{addTask,deleteTask,completeTask} from"../actions/actions"

class todoList extends Component {
  state={
    myInput:""
}

handleChange=(event)=>{
    this.setState({
        myInput:event.target.value
    })
}
handleAdd=()=>{
    this.props.addTask({
        text:this.state.myInput,
        id:Math.random(),
        done:false

    })
    this.setState({
        myInput:""
    })
}

  render() {

    return (
      <div className="App">
        <div className="add">
          <h1 class="titre">To-Do-App</h1>
          <p class="titre">Add new Task</p>
          <input placeholder="  Add new Task" type="text" value={this.state.myInput} onChange={this.handleChange} />
          <br />
          <button type='submit' className="button button-right" value="ADD" onClick={this.handleAdd}  >submit</button>
        </div>
        <div className="new-add">
          <ul>
            <li><h2 className="text">Let's get some work done !</h2></li>
            {
              this.props.todos.map((el, i) =>
                <li key={i} >
                  <div className="new">
                    <button onClick={()=>this.props.deleteTask(el.id)}>delete</button>
                    <button onClick={()=>this.props.completeTask(el.id)}>{el.done ? "undo" : "Complete"}</button>
                    <h3 className={el.done ? "done" : "undone"}>{el.text}</h3>
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}


const mapStateToProps=state=>{
  return{ todos:state}
}

const mapDispatchToProps=dispatch=>{
  return { addTask:(payload)=>dispatch(addTask(payload)),
      deleteTask:(payload)=>dispatch(deleteTask(payload)),
      completeTask:(payload)=>dispatch(completeTask(payload)),
  }
}

export default connect (mapStateToProps,mapDispatchToProps)  (todoList)

