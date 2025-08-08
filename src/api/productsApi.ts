import axios from "axios";

const API_URL = "http://127.0.0.1:8000/products"; // если порт другой — поменяйте

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: number;
  images: string[];
  stock: number;
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await axios.get<Product[]>(API_URL + "/");
  return res.data;
}

export async function fetchProduct(id: number): Promise<Product> {
  const res = await axios.get<Product>(`${API_URL}/${id}`);
  return res.data;
}