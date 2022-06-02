import * as React from "react";
import "./Todo.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function Todo({ arr, removeToDo }) {
  const [checked, setChecked] = React.useState([]);
  // const handleRemoveToDo = (id) => {
  //   //  console.log(id);
  //   removeToDo(id);
  // };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

    
  
  
  return (
    <List sx={{ width: "100%", maxWidth: 800, bgcolor: "rgb(225, 221, 221)" }}>
      {arr.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <span>
                <CreateIcon style={{ color: "black", cursor: "pointer" }} />
              
                <RemoveCircleIcon
                  onClick={()=>removeToDo(value.id)}
                  style={{ color: "red", cursor: "pointer" }}
                />
              </span>
            }
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  style={{
                    color: "#00FF00",
                    textDecorationLine: "line-through",
                  }}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
               className="list"
                id={labelId}
                primary={` ${value.task}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
