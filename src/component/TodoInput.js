import { useState, useEffect, useRef} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function TodoInput(props) {
  const inputRef = useRef();

  useEffect(() => {
    console.log("use effect ran");
    inputRef.current.focus();
  });
  const [toDo, setToDo] = useState("");
  
  const handleChange = (e) => {
    setToDo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(toDo);
  };
  return (
    <div>
      <h1>TO DO LIST</h1>
      <TextField
        value={toDo}
        onChange={handleChange}
        ref={inputRef}
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
