import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Task({ task, isDone, deleteTask, updateTask }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full h-10 min-h-[40px] border-b  flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <input
                className="mr-4 ml-1 cursor-pointer border-secondary"
                type="checkbox"
                checked={isDone}
                onChange={updateTask}
                name="done"
            />
            <p
                className={`text-[13px] ${
                    isDone ? "text-slate-400 line-through" : "text-slate-800"
                }  font-medium w-full first-letter:uppercase my-auto`}
            >
                {task}
            </p>
            <button
                className={`w-9 h-full transition-all duration-200  ${
                    isHovered ? "text-red-600 opacity-100" : "md:opacity-0 text-slate-400 opacity-100"
                }`}
                onClick={deleteTask}
            >
                <XMarkIcon className="h-4 w-4" />
            </button>
        </div>
    );
}

export default Task;
