import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useThunk } from "../hooks/useThunk";
import { fetchToDos } from "../store";
import ToDoItem from "./ToDoItem";
import Skeleton from "./Skeleton";

function ToDoList() {
    const [doFetchToDos, isLoading, error] = useThunk(fetchToDos);

    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        doFetchToDos();
    }, []);

    return (
        <div className="w-full flex flex-col gap-1 overflow-y-auto max-h-[70%]">
            {isLoading ? (
                <Skeleton times={4} className={" h-16 w-full"} />
            ) : null}
            {todos.map((todo) => (
                <ToDoItem todo={todo} key={todo._id} />
            ))}
        </div>
    );
}

export default ToDoList;
