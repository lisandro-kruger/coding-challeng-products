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

    const [result] = await pool.query(
      "INSERT INTO products (name, description, image_url ,price) VALUES (?, ?, ?, ?)",
      [name, description, image_url, price]
    );
    res.status(201).json(result);
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

export const createProductInsert = async (req, res) => {
  try {
    // Verifica si ya existen los productos con los nombres dados
    const existingProducts = await pool.query(
      "SELECT * FROM products WHERE id IN (?, ?, ?)",
      ["1", "2", "3"]
    );

    const existingProductNames = existingProducts.map((product) => product.name);

    // Inserta los productos que no existen
    const productsToInsert = [
      {
        id: 1,
        name: "Zapatillas Puma",
        description: "Zapatillas Urbanas Hombre Puma Smash Negro | Oechsle - Oechsle",
        image_url: "https://oechsle.vteximg.com.br/arquivos/ids/380197-1500-1500/1168825_1.jpg?v=636749631349830000",
        price: 79.99,
      },
      {
        id: 2,
        name: "Zapatillas Adidas",
        description: "ADIDAS ORIGINALS Schuh 'U_Path Run' Jungen Weiß",
        image_url: "https://i.pinimg.com/originals/e4/ff/d6/e4ffd6486f8cb984c6e68aff37adffe1.jpg",
        price: 19.99,
      },
      {
        id: 3,
        name: "Zapatillas Under",
        description: "Zapatillas Deportivas Under Armour Hombre Negro",
        image_url: "https://th.bing.com/th/id/OIP.iomBB16E6hBXqRLDhWXCZgHaHa?rs=1&pid=ImgDetMain",
        price: 129.99,
      },
    ];

    const productsToInsertFiltered = productsToInsert.filter(
      (product) => !existingProductNames.includes(product.name)
    );

    if (productsToInsertFiltered.length === 0) {
      return res.status(400).json({ message: "Los productos ya existen." });
    }

    // Inserta los nuevos productos
    for (const product of productsToInsertFiltered) {
      await pool.query(
        "INSERT INTO products (id, name, description, image_url, price) VALUES (?, ?, ?, ?, ?)",
        [product.id, product.name, product.description, product.image_url, product.price]
      );
    }

    res.status(201).json({ message: "Productos insertados correctamente." });
  } catch (error) {
    console.error("Error al crear los productos:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};