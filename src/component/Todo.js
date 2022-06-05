import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";
export default function Todo() {
  const [toDos, setToDos] = useState([]);

  const handleSubmit = (toDo) => {
    setToDos([...toDos, { id: uuid(), task: toDo, isDone: false, }]);
  };
  const removeToDo = (id) => {
    const filter = toDos.filter((value) => {
      if (value.id === id) return null;
      else return value;
    });
    setToDos(filter);
  };
  const handleToggle = (id) => {
   
    const checkedToDos = toDos.map((value) => {
      if (value.id === id) value.isDone = !value.isDone;
      return value;
    });
    setToDos(checkedToDos);
    // console.log(toDos)
  };
  return (
    <div className="container">
      <TodoInput handleSubmit={handleSubmit} />
      <TodoList
        toDos={toDos}
        removeToDo={removeToDo}
        handleToggle={handleToggle}
      />
    </div>
  );
}
