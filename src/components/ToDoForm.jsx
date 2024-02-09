import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { changeName, changeDescription, addToDo } from "../store";
import { useThunk } from "../hooks/useThunk";
import Button from "./Button";

function ToDoForm() {
    const dispatch = useDispatch();
    const formSelector = createSelector(
        (state) => state.form.name,
        (state) => state.form.description,
        (name, description) => ({
            name,
            description,
        })
    );

    const { name, description } = useSelector(formSelector);
    const [doAddToDo, isLoading, error] = useThunk(addToDo);

    const handleNameChange = (e) => dispatch(changeName(e.target.value));
    const handleDescChange = (e) => dispatch(changeDescription(e.target.value));

    const handleSubmit = (e) => {
        e.preventDefault();
        doAddToDo({ name, description });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full bg-[#4e5152] p-4 flex flex-col gap-2"
        >
            <div className="flex justify-between items-center sm:flex-col sm:gap-6">
                <div className="flex gap-4 sm:flex-col">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            onChange={handleNameChange}
                            value={name}
                            className="rounded-lg p-2 text-black  focus:outline-none focus:ring ring-[#d68f39]"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            onChange={handleDescChange}
                            value={description}
                            className="rounded-lg p-2 text-black  focus:outline-none focus:ring ring-[#d68f39]"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                <Button type={"submit"} isLoading={isLoading}>
                    Add ToDo
                </Button>
            </div>
            {error ? <p className="text-red-400">{error}</p> : null}
        </form>
    );
}

export default ToDoForm;
