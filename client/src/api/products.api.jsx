import axios from "axios";

export const getProductsRequest = () => axios.get("https://coding-challeng-products-tosw.onrender.com/api/products");

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