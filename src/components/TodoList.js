import React, { useEffect, useState } from "react";
import './TodoList.css';
import CreateTask from "../modals/CreateTask";
import Task from "./Task"

const TodoList = () => {

  const texts = {
    title: "Todo List",
    button: "Create Task",
    modalTitle: "Create New Task"
  }

  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList")

    if (arr) {
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const toggle = () => setModal(!modal);

  const handleSaveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);

    localStorage.setItem("taskList", JSON.stringify(tempList));

    setTaskList(tempList);
    setModal(false)

  }

  const handleDelete = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList);
    window.location.reload()
  }

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList);
    window.location.reload()
  }

  return (
    <div className="main">
			<div className="header text-center">
				<h3>{texts.title}</h3>
				<button onClick = {() => setModal(true)} >{texts.button}</button>
			</div>
			<div className="task-container">
				{taskList.map((obj, index) => 
					<Task 
						key={index}
						name={obj.Name} 
						description={obj.Description} 
						index={index} 
						deleteTask={handleDelete}
						updateListArray = {updateListArray}
					/>
				)}
			</div>
			<CreateTask toggle={toggle} modal={modal} title={texts.modalTitle} saveTask={handleSaveTask} />
		</div>
  )

}
export default TodoList;