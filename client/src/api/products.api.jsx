import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export const getProductsRequest = () => axios.get(VITE_BACKEND_URL);

/*
export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, {
    done,
  });
*/ 