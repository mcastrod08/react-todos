import React, { useState } from 'react';
import "./Task.css";
import EditTask from "../modals/EditTask";
const Task = (props) => {


  const texts = {
    title: "Todo List",
    button: "Create Task",
    modalTitle: "Edit Task"
  }

  const handleDelete = () => {
    props.deleteTask(props.index)
  }

  const updateTask = (obj) => {
    props.updateListArray(obj, props.index)
  }

  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  return (
    <div className="card mr-4 mt-4 ml-4">
		  <div className="card-header">Task {props.index}</div>
		  <div className="card-body">
		    <h5 className="card-title">{props.name}</h5>
		    <p className="card-text">
		      {props.description}
		    </p>
		  </div>
		  <div className="card-footer text-muted">
		  	<i className="fas fa-edit edit" onClick={() => setModal(true)}></i>
		  	<i className="fas fa-trash delete" onClick={handleDelete}></i>
		  </div>
  		<EditTask toggle={toggle} modal={modal} title={texts.modalTitle} task={props.name} description={props.description} updateTask={updateTask}/>

		</div>
  )
}

export default Task;