import axios from "axios";
import { TaskType, CreateTaskType, UpdateTaskType } from "../common/types";

const BASE = import.meta.env.VITE_BASE + "tasks";

export async function fetchTasks(): Promise<TaskType[]> {
  try {
    const response = await axios.get(`${BASE}/`);
    return response.data;
  } catch (error) {
    throw new Error("Помилка отримання даних");
  }
}

export async function createTask(task: CreateTaskType): Promise<TaskType> {
  try {
    const response = await axios.post(`${BASE}/`, task);
    return response.data;
  } catch (error) {
    throw new Error("Помилка при створенні завдання");
  }
}

export async function updateTask({
  id,
  data,
}: {
  id: number;
  data: UpdateTaskType;
}): Promise<TaskType> {
  try {
    const response = await axios.patch(`${BASE}/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error("Помилка при змінні завдання");
  }
}

export async function removeTask(id: number): Promise<void> {
  try {
    const response = await axios.delete(`${BASE}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Помилка при видаленні завдання");
  }
}
