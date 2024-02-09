import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchToDos = createAsyncThunk(
    "todos/fetch",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/todos/`
            );

            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

export { fetchToDos };
