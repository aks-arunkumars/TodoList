// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Todo from "./component/Todo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  const removeToDo = (id) => {
    const filter = toDos.filter((value) => {
      if (value.id !== id) return value;
      else return null;
    });
    setToDos(filter);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>TO DO LIST</h1>
        <TextField
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          id="outlined-basic"
          placeholder="Enter a to-do task.."
          className="input-field"
          variant="outlined"/>
        &nbsp;
        <Button
          onClick={() =>
            setToDos([...toDos, { id: uuid(), task: toDo, isDone: false }])
          }
          variant="contained"
          className="button-add"
        >
          + Add
        </Button>
        <Todo arr={toDos} removeToDo={removeToDo} />
      </div>
    </div>
  );
}

export default App;
