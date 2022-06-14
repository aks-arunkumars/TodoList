<<<<<<< Updated upstream
import { useState} from "react";
=======
import { useState } from "react";
import { useDispatch } from "react-redux";

//Mui
>>>>>>> Stashed changes
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toDosSlice } from "../Redux/ToDos/toDosSlice";

export default function TodoInput(props) {
<<<<<<< Updated upstream
=======
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState("");
>>>>>>> Stashed changes

  const [toDo, setToDo] = useState("");
  
  const handleChange = (e) => {
    setToDo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {  id: Date.now(), task: toDo, isDone: false };
    dispatch(toDosSlice.actions.addItemToToDos(obj));
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
