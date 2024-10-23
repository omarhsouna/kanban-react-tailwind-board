import DeleteIcon from "../assets/icons/trash-outline.svg";
import AddIcon from "../assets/icons/add-circle-outline.svg";
import Task from "./Task";
import { Column as ColumnType } from "../types/Column";
import { Task as TaskType } from "../types/Task";
interface Column {
  column: ColumnType;
  addTask: (column: ColumnType) => void;
  deleteTask: (column: ColumnType, task: TaskType) => void;
  updateTitleTask: (column: ColumnType, task: TaskType, title: string) => void;
  deleteColumn: (column: ColumnType) => void;
  updateTitleColumn: (column: ColumnType, title: string) => void;
}
const Column = ({
  column,
  addTask,
  deleteTask,
  updateTitleTask,
  deleteColumn,
  updateTitleColumn,
}: Column) => {
  return (
    <div className="min-w-[300px] max-w-[300px] min-h-[80vh] max-h-[80vh] border border-black rounded-lg relative overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <p
          contentEditable
          onInput={(e) => {
            const title = e.target.innerHTML || "";
            updateTitleColumn(column, title);
          }}
          suppressContentEditableWarning={true}
          className="p-2  w-[70%] whitespace-nowrap overflow-hidden text-ellipsis"
          dangerouslySetInnerHTML={{ __html: column.title }}
        />

        <button
          className="hover:text-primary"
          onClick={(e) => {
            e.preventDefault();
            deleteColumn(column);
          }}
        >
          <DeleteIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4 flex flex-col gap-3 max-h-[calc(100%-120px)] overflow-y-scroll">
        {column.tasks.map((task) => (
          <Task
            key={task.id}
            column={column}
            task={task}
            deleteTask={deleteTask}
            updateTitleTask={updateTitleTask}
          />
        ))}
      </div>
      <footer className="absolute bottom-0 w-full p-4 h-[60px] bg-white overflow-hidden rounded-lg">
        <button
          className="flex items-center gap-3 w-full"
          onClick={() => addTask(column)}
        >
          <AddIcon className="w-5 h-5" />
          <span>Add Task</span>
        </button>
      </footer>
    </div>
  );
};

export default Column;
