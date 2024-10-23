import { useImmerReducer } from "use-immer";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "../../assets/icons/add-circle-outline.svg";
import Column from "../../components/Column";
import { Task as TaskType } from "../../types/Task";
import { Column as ColumnType } from "../../types/Column";
type Action =
  | { type: "addColumn" }
  | { type: "deleteColumn"; payload: ColumnType }
  | {
      type: "updateTitleColumn";
      payload: { column: ColumnType; title: string };
    }
  | { type: "addTask"; payload: { column: ColumnType } }
  | { type: "deleteTask"; payload: { column: ColumnType; task: TaskType } }
  | {
      type: "updateTitleTask";
      payload: { column: ColumnType; task: TaskType; title: string };
    };

const reducer = (state: ColumnType[], action: Action) => {
  switch (action.type) {
    case "addColumn": {
      return [
        ...state,
        { id: uuidv4(), title: `Column ${state.length + 1}`, tasks: [] },
      ];
    }
    case "deleteColumn": {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case "updateTitleColumn": {
      const { column, title } = action.payload;
      return state.map((item) => {
        if (item.id === column.id) {
          return {
            ...item,
            title,
          };
        }
        return item;
      });
    }
    case "addTask": {
      const column = state.find((item) => item.id === action.payload.column.id);
      if (column)
        column?.tasks.push({
          id: uuidv4(),
          title: `Task ${column.tasks.length + 1}`,
          description: "",
          status: "",
        });
      return state;
    }
    case "deleteTask": {
      const column = state.find((item) => item.id === action.payload.column.id);
      if (column)
        column.tasks = column?.tasks.filter(
          (item) => item.id !== action.payload.task.id
        );
      return state;
    }
    case "updateTitleTask": {
      const { column, task, title } = action.payload;
      const columnState = state.find((item) => item.id === column.id);
      if (columnState)
        columnState.tasks = column.tasks.map((item) => {
          if (item.id === task.id) {
            return {
              ...item,
              title,
            };
          }
          return item;
        });
      return state;
    }

    default:
      return state;
  }
};
const Boards = () => {
  const [columns, dispatch] = useImmerReducer(reducer, [] as ColumnType[]);

  const addTask = (column: ColumnType) =>
    dispatch({ type: "addTask", payload: { column } });
  const deleteTask = (column: ColumnType, task: TaskType) =>
    dispatch({ type: "deleteTask", payload: { column, task } });

  const updateTitleTask = (column: ColumnType, task: TaskType, title: string) =>
    dispatch({ type: "updateTitleTask", payload: { column, task, title } });

  const addColumn = () => dispatch({ type: "addColumn" });
  const deleteColumn = (column: ColumnType) =>
    dispatch({ type: "deleteColumn", payload: column });
  const updateTitleColumn = (column: ColumnType, title: string) =>
    dispatch({ type: "updateTitleColumn", payload: { column, title } });

  return (
    <div className="flex gap-3  h-full w-full p-3">
      {columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          addTask={addTask}
          deleteTask={deleteTask}
          updateTitleTask={updateTitleTask}
          deleteColumn={deleteColumn}
          updateTitleColumn={updateTitleColumn}
        />
      ))}
      <button
        className=" self-start flex  gap-3 border border-black hover:border-primary hover:text-primary p-4 rounded-lg min-w-64 h-auto"
        onClick={() => addColumn()}
      >
        <AddIcon className="w-5 h-5" />
        <span>Add Column</span>
      </button>
    </div>
  );
};

export default Boards;
