import { Task } from "./Task";

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}