import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./TodoList.css";

export default function TodoList(props) {
  
  const { toDos, removeToDo, handleToggle, submitEditToDo } = props;
  const [newEditedToDo, setNewEditedToDo] = useState("")
   const [editToDo, setEditToDo] = useState(null);
  const handleRemoveToDo = (id) => {
    removeToDo(id);
  };
  const strike = (e) => {
    e.target.classList.toggle("strike");
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
              placeholder="Edit and update.."
              onChange={(e) => setNewEditedToDo(e.target.value)}
            />
          ) : (
            <p style={{ cursor: "pointer" }} onClick={strike}>
              {value.task}
            </p>
          )}

          <div>
            {value.id === editToDo ? (
              <AddCircleOutlineIcon
                style={{ color: "rgb(7, 232, 90)", cursor: "pointer" }}
                onClick={() => handleEditToDo(value.id, newEditedToDo)}
              />
            ) : (
              <CreateIcon
                onClick={() => setEditToDo(value.id)}
                style={{ color: "black", cursor: "pointer" }}
              />
            )}

            <RemoveCircleIcon
              onClick={() => handleRemoveToDo(value.id)}
              style={{ color: "red", cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
