import { PlusIcon } from "@heroicons/react/24/solid";   

function TaskInput({input, add, handleChange}) {
    return (
        <div className="border h-10 flex overflow-hidden bg-transparent rounded-[4px] ">
            <input
                className="h-full w-full placeholder:text-xs placeholder:p-2 caret-primary bg-white-100 focus:outline-none px-2 text-sm"
                type="text"
                name="task-input"
                value={input}
                placeholder="Create new task..."
                onChange={handleChange}
            />
            <button
                className={`bg-white-100 ${input.length === 0 ? "hidden" : "grid"} place-items-center text-primary font-white h-full w-8`}
                onClick={add}
            >
                <PlusIcon className="h-5" />
            </button>
        </div>
    );
}

export default TaskInput;
