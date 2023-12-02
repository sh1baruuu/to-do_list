import logo from "../assets/createTask.png";


function EmptyTasks() {
    return (
        <div className="flex flex-col w-full justify-center items-center absolute  top-2/4 left-2/4 translate-x-[-50%] translate-y-[-70%]">
            <img src={logo} className="h-24 w-24 opacity-40 " alt="" />
            <p className="text-[.70rem] text-gray-500">
                Add a new task here...
            </p>
        </div>
    );
}

export default EmptyTasks;
