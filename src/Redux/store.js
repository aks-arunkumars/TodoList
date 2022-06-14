import { configureStore } from "@reduxjs/toolkit";
import toDosReducer from './ToDos/toDosSlice'

export default configureStore({
    reducer: {
        toDos: toDosReducer
    }
})