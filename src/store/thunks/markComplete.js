import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const markComplete = createAsyncThunk(
    "todos/markComplete",
    async (todo, { rejectWithValue }) => {
        try {
            await axios.patch(
                `${import.meta.env.VITE_API_URL}/todos/${todo._id}/complete`
            );

            return todo;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

export { markComplete };
