import DeleteIcon from "../assets/icons/trash-outline.svg";
import { Column } from "../types/Column";
import { Task as TaskType } from "../types/Task";
interface Task {
  task: TaskType;
  column: Column;
  deleteTask: (column: Column, task: TaskType) => void;
  updateTitleTask: (column: Column, task: TaskType, title: string) => void;
}
const Task = ({ task, column, deleteTask, updateTitleTask }: Task) => {
  return (
    <div className="relative min-h-20 w-full rounded-lg border border-black p-2 group">
      <p
        contentEditable
        onInput={(e) => {
          const title = e.target.innerHTML || "";
          updateTitleTask(column, task, title);
        }}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: task.title }}
      />

      <button
        className="absolute top-1/2 -translate-y-1/2 right-2 hover:text-primary p-2 rounded-lg "
        onClick={(e) => {
          e.preventDefault();
          deleteTask(column, task);
        }}
      >
        <DeleteIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Task;
