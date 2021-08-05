import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = (props) => {



  const handleTaskName = (e) => setTaskName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;

    props.saveTask(taskObj);
    setTaskName("");
    setDescription("");
  }

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("")
  return (

    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label htmlFor="">Task Title:</label>
            <input type="text" name="titleTask" value={taskName} onChange={handleTaskName} className="form-control" />  
          </div>
          <div className="form-group">
            <label htmlFor="">Task Description:</label>
            <textarea name="description" rows="5" value={description} onChange={handleDescription} className="form-control"></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>Create</Button>{' '}
        <Button color="secondary" onClick={props.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateTask;