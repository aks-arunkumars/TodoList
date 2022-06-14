import { createSlice } from "@reduxjs/toolkit";
export const toDosSlice = createSlice({
  name: "toDos",
  initialState: [{}],
  reducers: {
    addItemToToDos: (state, action) => {
      // state.value += action.payload
      console.log("Task is " + action.payload.task);
      console.log("ID is " + action.payload.id);
      console.log("IsDone " + action.payload.isDone);
      state.push(action.payload);
    },
    // removeItemFromToDOs: (state, action) => {

    // }
  },
});
// export function addItem(value) {
//   dispatch(toDosSlice.actions.addItemToToDo(value));
// }
export const { addItemToToDo } = toDosSlice.actions;

export default toDosSlice.reducer;
