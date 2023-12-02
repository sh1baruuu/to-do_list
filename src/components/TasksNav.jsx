function TasksNav({filter, clearAllTasks, all, pending, completed}) {
    return (
        <div className="w-full border-b-2 flex cursor-pointer mb-2 mt-1 items-end h-8">
            <ul className="flex text-slate-500 uppercase text-[.7rem] gap-1 w-full font-medium">
                <li
                    className={`px-2 text-left hover:text-primary border-primary ${
                        filter === "all" ? "text-primary font-semibold" : ""
                    }`}
                    onClick={all}
                >
                    All
                </li>
                <li
                    className={`pr-2 text-left hover:text-primary border-primary ${
                        filter === "pending" ? "text-primary font-semibold" : ""
                    }`}
                    onClick={pending}
                >
                    Pending
                </li>
                <li
                    className={`pr-2 text-left hover:text-primary border-primary ${
                        filter === "completed"
                            ? "text-primary font-semibold"
                            : ""
                    }`}
                    onClick={completed}
                >
                    Completed
                </li>
            </ul>
            <button
                onClick={clearAllTasks}
                className="text-xs w-20 rounded-sm mb-1 text-white h-5 bg-primary"
            >
                Clear All
            </button>
        </div>
    );
}

export default TasksNav;
