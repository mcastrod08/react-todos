import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = (props) => {



  const handleTaskName = (e) => setTaskName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    props.updateTask(tempObj)
  }

  const [taskName, setTaskName] = useState(props.task);
  const [description, setDescription] = useState(props.description);
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
        <Button color="primary" onClick={handleUpdate}>Edit</Button>{' '}
        <Button color="secondary" onClick={props.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default EditTask;