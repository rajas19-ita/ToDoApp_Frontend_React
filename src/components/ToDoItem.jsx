import React from "react";
import { useThunk } from "../hooks/useThunk";
import { markComplete, removeToDo } from "../store";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import Button from "./Button";

function ToDoItem({ todo }) {
    const [doMarkComplete, isMarking, errorMarking] = useThunk(markComplete);
    const [doRemove, isRemoving, errorRemoving] = useThunk(removeToDo);
    return (
        <div className="flex flex-col bg-[#4e5152] px-4 py-4 gap-2">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h2
                        className={`text-3xl font-bold ${
                            todo.complete
                                ? "text-[#737778] line-through"
                                : "text-[#d68f39]"
                        } `}
                    >
                        {todo.name}
                    </h2>
                    <p
                        className={`${
                            todo.complete
                                ? "text-[#737778] line-through"
                                : "text-white"
                        }`}
                    >
                        {todo.description}
                    </p>
                </div>
                <div className="flex gap-4">
                    {!todo.complete ? (
                        <Button
                            type={"complete"}
                            onClick={() => doMarkComplete(todo)}
                            isLoading={isMarking}
                        >
                            <FaCheck size={23} />
                        </Button>
                    ) : null}

                    <Button
                        type={"delete"}
                        onClick={() => doRemove(todo)}
                        isLoading={isRemoving}
                    >
                        <MdDeleteOutline size={23} />
                    </Button>
                </div>
            </div>

            {errorMarking ? (
                <p className="text-red-400">{errorMarking}</p>
            ) : null}
            {errorRemoving ? (
                <p className="text-red-400">{errorRemoving}</p>
            ) : null}
        </div>
    );
}

export default ToDoItem;
