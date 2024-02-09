import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeDescription } from "./slices/formSlice";
import { todosReducer } from "./slices/todosSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        todos: todosReducer,
    },
});

export { store, changeName, changeDescription };
export * from "./thunks/addToDo";
export * from "./thunks/fetchToDos";
export * from "./thunks/markComplete";
export * from "./thunks/removeToDo";
