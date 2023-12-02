import create from "../assets/createTask.png";
import pending from "../assets/pendingTask.png";
import completed from "../assets/completedTask.png";


function EmptyTasks({filter, show}) {
    return (
        <div className={`flex flex-col w-full justify-center items-center absolute  top-2/4 left-2/4 translate-x-[-50%] translate-y-[-70%] ${show ? "block" : "hidden"}`}>
            <img src={filter === "all" ? create : (filter === "pending" ? pending : completed)} className="h-24 w-24 opacity-40 " alt="" />
            <p className="text-[.70rem] text-gray-500">
                {filter === "all" ? " Add a new task here..." : (filter === "pending" ? "No pending tasks" : "No completed tasks")}

            </p>
        </div>
    );
}

export default EmptyTasks;
