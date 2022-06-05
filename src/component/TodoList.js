import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import "./TodoList.css";

export default function TodoList(props) {
  const { toDos, removeToDo, handleToggle } = props;
  const handleRemoveToDo = (id) => {
    removeToDo(id);
  };
  const strike = (e) => {
    e.target.classList.toggle('strike');
  };

  return (
    <div>
      {toDos.map((value) => (
        <div className={"list"} key={value.id}>
          <label className={"b-contain"}>
            <input type="checkbox" onChange={() => handleToggle(value.id)} />
            <div className="b-input"></div>
             </label>
          <p style={{ cursor: "pointer" }} onClick={strike}>
         {value.task}
          </p>
          <div>
            <CreateIcon
              onClick={() => alert("Coming soon..")}
              style={{ color: "black", cursor: "pointer" }}
            />
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
