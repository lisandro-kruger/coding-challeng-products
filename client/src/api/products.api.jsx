import axios from "axios";
import { BACKEND_URL } from "../../config";

const URL = BACKEND_URL || "http://localhost:4000/api/products";

export const getProductsRequest = async () =>
    await axios.get(URL);