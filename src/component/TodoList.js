import React from "react";
//CSS
import "./TodoList.css";
//Component
import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { toDos, removeToDo, handleToggle, submitEditToDo } = props;
  return (
    <div>
      <TodoListItem
        toDos={toDos}
        removeToDo={removeToDo}
        handleToggle={handleToggle}
        submitEditToDo={submitEditToDo}
      />
    </div>
  );
}
