import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeToDo = createAsyncThunk(
    "todos/remove",
    async (todo, { rejectWithValue }) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_API_URL}/todos/${todo._id}`
            );

            return todo;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

export { removeToDo };
