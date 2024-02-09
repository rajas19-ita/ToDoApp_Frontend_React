import { createSlice } from "@reduxjs/toolkit";
import { addToDo } from "../thunks/addToDo";

const formSlice = createSlice({
    name: "form",
    initialState: {
        name: "",
        description: "",
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeDescription(state, action) {
            state.description = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(addToDo.fulfilled, (state, action) => {
            state.name = "";
            state.description = "";
        });
    },
});

export const { changeName, changeDescription } = formSlice.actions;
export const formReducer = formSlice.reducer;
