import { pool } from "../db.js";

export const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM products"
    );
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM products WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, image_url, price} = req.body;
    const [result] = await pool.query(
      "INSERT INTO products(name, description, image_url, price) VALUES (?, ?, ?, ?)",
      [name, description, image_url, price]
    );
    res.status(201).json({
      id: result.insertId,
      name,
      description,
      image_url,
      price
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const result = await pool.query("UPDATE products SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    const [updateProduct] = await pool.query("SELECT * FROM products WHERE id = ?", [req.params.id]);

    res.status(201).json(updateProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM products WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Product not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};