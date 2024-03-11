-- table tasks
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    image_url VARCHAR(2000) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);