import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import Title from "./components/Title";
import EmptyTasks from "./components/EmptyTasks";
import TasksNav from "./components/TasksNav";

function App() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [showedTasks, setShowedTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        setShowedTasks(tasks);
    }, [tasks]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const updateTask = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    const deleteTask = (index) => {
        setTasks((prev) => {
            return prev.filter(({ id }) => id !== index);
        });
    };

    const addTask = () => {
        setTasks((prev) => [
            ...prev,
            { id: nanoid(), task: input, isDone: false },
        ]);
        setInput("");
    };

    const clearAllTasks = () => {
        setTasks([]);
        localStorage.removeItem("tasks");
    };

    useEffect(() => {
        if (filter === "all") {
            setShowedTasks(tasks);
        } else if (filter === "completed") {
            setShowedTasks(tasks.filter((task) => task.isDone));
        } else if (filter === "pending") {
            setShowedTasks(tasks.filter((task) => !task.isDone));
        }
    }, [tasks, filter]);

    const handleFilter = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const taskArray = showedTasks.map(({ id, task, isDone }) => {
        return (
            <Task
                key={id}
                task={task}
                isDone={isDone}
                updateTask={() => updateTask(id)}
                deleteTask={() => deleteTask(id)}
            />
        );
    });

    return (
        <div className="flex h-screen flex-col w-screen justify-center items-center overflow-hidden select-none bg-gradient-to-br from-primary to-secondary">
            <div className="flex flex-col h-screen w-screen p-3 border gap-3 border-white/20 bg-white/10 backdrop-blur-sm md:h-[70%] md:w-[550px] md:rounded-md ">
                <Title />
                <TaskInput
                    input={input}
                    add={addTask}
                    handleChange={handleChange}
                />
                <div className="bg-white-100 flex relative p-4 pr-1 pt-0 w-full flex-col h-full overflow-y-scroll rounded-[4px]">
                    <TasksNav
                        filter={filter}
                        clearAllTasks={clearAllTasks}
                        all={() => handleFilter("all")}
                        pending={() => handleFilter("pending")}
                        completed={() => handleFilter("completed")}
                    />
                    <EmptyTasks
                        show={showedTasks.length === 0}
                        filter={filter}
                    />
                    {taskArray}
                </div>
            </div>
        </div>
    );
}

export default App;
