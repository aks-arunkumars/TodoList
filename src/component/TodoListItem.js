import React, { useState } from "react";

// //Material UI
//  import { createTheme } from "@mui/material/styles";

import CreateIcon from "@mui/icons-material/Create";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

//Component
import AlertDialog from "./AlertDialog";
//CSS
import "./TodoListItem.css";
// const theme = createTheme({

//   palette: {
//     primary: {
//       main: "#b71c1c"
//     }
//   },
// });
export default function TodoListItem(props) {
  const { toDos, removeToDo, handleToggle, submitEditToDo } = props;
  const [newEditedToDo, setNewEditedToDo] = useState("");
  const [editToDo, setEditToDo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [removeToDoId, setRemoveToDoId] = useState(); //to store id, for deleting todo in modal
  const [dialouugeBoxTask, setDialougeBoxTask] = useState(""); // to display todo task in a dialogue box when deleting
  const handleModal = (id, task) => {
    setIsModalOpen(true);
    setRemoveToDoId(id);
    setDialougeBoxTask(task);
  };
  const handleRemoveToDo = (id) => {
    removeToDo(id);
    setIsModalOpen(false);
  };

  const handleEditToDo = (id, newEditedToDo) => {
    submitEditToDo(id, newEditedToDo);
    setEditToDo(null);
  };
  return (
    <div>
      {toDos.map((value) => (
        <div className={"list"} key={value.id}>
          <label className={"b-contain"}>
            <input type="checkbox" onChange={() => handleToggle(value.id)} />
            <div className="b-input"></div>
          </label>
          {value.id === editToDo ? (
            <input
              type="text"
              className="edit-todo"
              defaultValue={value.task}
              autoFocus
              onChange={(e) => setNewEditedToDo(e.target.value)}
            />
          ) : (
            <p className={value?.isDone ? "strike" : ""}>{value.task}</p>
          )}

          <div>
            {value.id === editToDo ? (
              <AddCircleOutlineIcon
                className={"submit-edit-icon"}
                onClick={() => handleEditToDo(value.id, newEditedToDo)}
              />
            ) : (
              <CreateIcon
                onClick={() => setEditToDo(value.id)}
                className={"edit-icon"}
              />
            )}

            <RemoveCircleIcon
              onClick={() => handleModal(value.id, value.task)}
              className={"remove-icon"}
            />
          </div>
        </div>
      ))}
      <AlertDialog
        handleRemove={() => handleRemoveToDo(removeToDoId)}
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        task={dialouugeBoxTask}
      />
    </div>
  );
}
