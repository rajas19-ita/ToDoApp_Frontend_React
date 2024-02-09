import React from "react";
import { GoSync } from "react-icons/go";

function Button({ type, children, isLoading, onClick: handleClick }) {
    let className;

    switch (type) {
        case "submit":
            className = `transition-all ease-out active:scale-95 rounded-full 
            bg-[#d68f39] hover:bg-[#c18133] active:bg-[#c18133] font-medium h-12 w-32 
            flex justify-center items-center sm:h-10 sm:w-28`;
            break;
        case "complete":
            className = `transition-all ease-out rounded-md bg-white text-green-600 border-2 
            border-green-600 active:scale-95 font-medium h-10 w-10 flex
            justify-center items-center`;
            break;
        case "delete":
            className = `transition-all ease-out rounded-md bg-white
             text-red-500 border-2 active:scale-95
             border-red-500 font-medium h-10 w-10 flex 
             justify-center items-center `;
            break;
        default:
            className = `transition-all ease-out active:scale-95 rounded-full 
            bg-[#d68f39] hover:bg-[#c18133] active:bg-[#c18133] font-medium h-12 w-32 
            flex justify-center items-center sm:h-10 sm:w-28`;
    }
    return (
        <button
            type={type === "submit" ? "submit" : "button"}
            className={className}
            onClick={handleClick}
            disabled={isLoading}
        >
            {isLoading ? <GoSync className="animate-spin" /> : children}
        </button>
    );
}

export default Button;
