import { useState } from "react";
//Mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function TodoInput(props) {
  const [toDo, setToDo] = useState("");

  const handleChange = (e) => {
    setToDo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(toDo);
    setToDo("");
  };
  return (
    <div>
      <h1>TO DO LIST</h1>
      <TextField
        value={toDo}
        onChange={handleChange}
        autoFocus
        id="outlined-basic"
        placeholder="Enter a to-do task.."
        className="input-field"
        variant="outlined"
      />
      <Button onClick={handleSubmit} variant="contained" className="button-add">
        + Add
      </Button>
    </div>
  );
}
