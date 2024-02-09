import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addToDo = createAsyncThunk(
    "todos/add",
    async (todo, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/todos`,
                {
                    ...todo,
                }
            );

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export { addToDo };
