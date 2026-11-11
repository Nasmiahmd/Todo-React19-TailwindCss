
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

type TodoItem = {
    text: string;
    completed: boolean;
}


type TodoListProps = {
    tasks: TodoItem[];
    onToggleTask?: (index: number) => void;
    onDeleteTask?: (index: number) => void;
    onEditTask?: (index: number) => void;
}

const TodoList = ({ tasks, onToggleTask, onDeleteTask, onEditTask }: TodoListProps) => {

    return (
        <div className="w-full flex flex-col gap-2 overflow-y-auto px-2">
            {tasks.map((task, index) =>
                <div key={index} className="todo-list-card flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-100 w-full">
                    <h3 className={`${task.completed ? "line-through text-gray-400" : "text-gray-700"}`}>
                        {task.text}
                    </h3>


                    <div className="flex items-center gap-2">
                        <input className="w-5 h-5 me-2 accent-green-600" type="checkbox" checked={task.completed} onChange={() => onToggleTask && onToggleTask(index)} />
                        <button aria-label="edit task" onClick={() => onEditTask && onEditTask(index)}><FaRegEdit onChange={() => onEditTask && onEditTask(index)} className="w-6 h-5 pb-0.5 opacity-25 hover:text-indigo-700 hover:opacity-80" /></button>
                        <button aria-label="delete task" onClick={() => onDeleteTask && onDeleteTask(index)}><MdDeleteOutline className="w-6 h-6 pb-0.5 opacity-25 hover:text-red-500 hover:opacity-80" /></button>
                    </div>
                </div>)}
        </div>
    )
}

export default TodoList