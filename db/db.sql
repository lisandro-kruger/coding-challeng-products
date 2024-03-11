-- Table Products
IF NOT EXISTS CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    image_url VARCHAR(2000) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- INSERT Products
IF NOT EXISTS (SELECT 1 FROM products WHERE id IN (1, 2, 3))
BEGIN
    INSERT INTO products (id, name, description, image_url, price)
    VALUES
        (1, 'Zapatillas Puma', 'Zapatillas Urbanas Hombre Puma Smash Negro | Oechsle - Oechsle', 'https://oechsle.vteximg.com.br/arquivos/ids/380197-1500-1500/1168825_1.jpg?v=636749631349830000', 79.99),
        (2, 'Zapatillas Adidas', 'ADIDAS ORIGINALS Schuh 'U_Path Run' Jungen Weiß', 'https://i.pinimg.com/originals/e4/ff/d6/e4ffd6486f8cb984c6e68aff37adffe1.jpg', 19.99),
        (3, 'Zapatillas Under', 'Zapatillas Deportivas Under Armour Hombre Negro', 'https://th.bing.com/th/id/OIP.iomBB16E6hBXqRLDhWXCZgHaHa?rs=1&pid=ImgDetMain', 129.99);
END
