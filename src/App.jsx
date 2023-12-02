import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import Title from "./components/Title";
import EmptyTasks from "./components/EmptyTasks";

function App() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
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

    const taskArray = tasks.map(({ id, task, isDone }) => {
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
                <div className="bg-white-100 flex relative p-4 pr-1 w-full flex-col h-full overflow-y-scroll rounded-[4px]">
                    { tasks.length === 0 && <EmptyTasks /> }
                    {taskArray}
                </div>
            </div>
        </div>
    );
}

export default App;
