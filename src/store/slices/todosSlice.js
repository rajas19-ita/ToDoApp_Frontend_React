import { createSlice } from "@reduxjs/toolkit";
import { addToDo } from "../thunks/addToDo";
import { fetchToDos } from "../thunks/fetchToDos";
import { markComplete } from "../thunks/markComplete";
import { removeToDo } from "../thunks/removeToDo";

const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    extraReducers(builder) {
        builder.addCase(addToDo.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(fetchToDos.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(markComplete.fulfilled, (state, action) => {
            const index = state.findIndex(
                (todo) => todo._id == action.payload._id
            );
            state[index].complete = true;
        });
        builder.addCase(removeToDo.fulfilled, (state, action) => {
            state.splice(
                state.findIndex((todo) => todo._id === action.payload._id),
                1
            );
        });
    },
});

export const todosReducer = todosSlice.reducer;
