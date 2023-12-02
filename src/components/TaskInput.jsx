import { Bars3BottomLeftIcon, PlusIcon } from "@heroicons/react/24/solid";

function TaskInput({input, add, handleChange}) {
    return (
        <div className="border relative h-10 flex overflow-hidden bg-transparent rounded-[4px] ">
            { input.length === 0 && <Bars3BottomLeftIcon className="h-4 w-4 left-3 top-2/4 translate-y-[-50%] absolute text-slate-400" />}
            <input
                className="h-full w-full placeholder:text-xs placeholder:pl-7 caret-primary bg-white-100 focus:outline-none px-2 text-sm"
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
