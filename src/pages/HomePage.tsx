import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import TodoList from "../components/TodoList";

type TodoItem = {
  text: string;
  completed: boolean;
}

const HomePage = () => {


  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  })


  const [isClicked, setIsClicked] = useState('one')
  const [isAddTodoText, setIsAddTodoText] = useState("")
  const [data, setData] = useState<TodoItem[]>([])

  // Edit models
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editText, setEditText] = useState("")

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('todoList') || '[]')
    setData(savedList)
    console.log(data)
  }, [])


  const isList = data.length > 0

  const activeTodo = (): number => {
    return data.filter(task => !task.completed).length
    // const updatedList = [...data]
    // let counts: number = 0;
    // for(let i = 0; i > updatedList.length; i++){
    //   if(updatedList[i].completed == false){
    //     counts++
    //   }
    // }
    // return counts
  }



  const saveToLocalStorage = (todo: string): void => {
    if (todo.trim() != '') {
      const newTodo: TodoItem = {
        text: todo,
        completed: false
      }

      const updatedList = [...data, newTodo]

      setData(updatedList)

      localStorage.setItem("todoList", JSON.stringify(updatedList))

      setIsAddTodoText("")
    }
  }

  const handleToggleTask = (index: number) => {
    const updatedList = [...data]
    updatedList[index].completed = !updatedList[index].completed
    setData(updatedList)
    localStorage.setItem("todoList", JSON.stringify(updatedList))
  }
  const handleDeleteTask = (index: number) => {
    const updatedList = data.filter((_, i) => i !== index)
    setData(updatedList)
    localStorage.setItem("todoList", JSON.stringify(updatedList))
  }

  const handleOpenEdit = (index: number) => {
    setEditingIndex(index)
    setEditText(data[index].text)
  }

  const handleEditTask = () => {
    if (editingIndex !== null && editText.trim() !== '') {
      const updatedList = [...data]
      updatedList[editingIndex].text = editText;
      setData(updatedList)
      localStorage.setItem("todoList", JSON.stringify(updatedList))
      setEditingIndex(null)
      setEditText('')
    }
  }

  const filteredTask = data.filter(task => {
    if (isClicked == "two") return !task.completed
    if (isClicked == "three") return task.completed
    return true;
  })

  return (
    <div className="outer-card">
      <div className="inner-card">
        {/* Topper Header */}
        <div className="w-full h-35 bg-indigo-600">
          <div className=" flex justify-around items-center h-full">
            <div className="space-y-1">
              <h1>My Tasks</h1>
              <p>Stay organized and get things done</p>
            </div>
            <div className="current-date">
              <p>{formattedDate}</p>
            </div>
          </div>
        </div>
        {/* 2nd layer Add Task */}
        <div className="w-full h-[91px] bg-slate-100 flex justify-center gap-4 items-center">
          <input type="text" className="todo-input" placeholder="Add a new task..." value={isAddTodoText} onChange={(e) => setIsAddTodoText(e.target.value)} />
          <button className="add-btn flex items-center justify-center pe-1" onClick={() => saveToLocalStorage(isAddTodoText)}><IoIosAdd className="w-7 h-7" />Add</button>
        </div>
        {/* 3rd layer filter btns */}
        <div className="w-full h-[71px] bg-violet-50 flex justify-between items-center px-4 shadow-sm">
          <div className="filter-btn-container">
            <button onClick={() => setIsClicked('one')} className={`${isClicked == 'one' ? 'clicked' : 'not-clicked'}`}>All</button>
            <button onClick={() => setIsClicked('two')} className={`${isClicked == 'two' ? 'clicked' : 'not-clicked'}`}>Active</button>
            <button onClick={() => setIsClicked('three')} className={`${isClicked == 'three' ? 'clicked' : 'not-clicked'}`}>Completed</button>
          </div>
          <div>
            <p className="text-slate-400">{activeTodo()} {activeTodo() > 1 ? "tasks left" : "task left"}</p>
          </div>
        </div>
        <div className="w-full h-[286px] bg-inherit scroll-smooth overflow-scroll no-scrollbar">
          <div className="flex flex-col items-center justify-center mx-1 my-1">{
            isList ? (<TodoList
              tasks={filteredTask}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
              onEditTask={handleOpenEdit}
            />) : (<>
              <HiOutlineClipboardDocumentList className="w-30 h-30 opacity-25 mt-18" />
              <p className="text-md text-gray-400 mt-3">No tasks yet. Add one above!</p></>)}
          </div>
        </div>
        <div className="w-full h-[58px] bg-slate-100 flex items-center justify-end">
          <p className="text-slate-400 text-sm pe-6">Stored in LocalStorage</p>
        </div>
      </div>
      {/* Edit popup window */}
      {editingIndex !== null && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-[400px] flex flex-col gap-4">
            <h2 className="text-lg font-bold text-gray-800">Edit Task</h2>

            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleEditTask()}
              autoFocus
            />

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 cursor-pointer text-sm font-medium"
                onClick={() => setEditingIndex(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 cursor-pointer text-sm font-medium"
                onClick={handleEditTask}
              >
                Save
              </button>
            </div>
          </div>
        </div>)}
    </div >
  );
};

export default HomePage;
