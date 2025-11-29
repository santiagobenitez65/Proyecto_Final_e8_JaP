CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL
); 

CREATE TABLE Carrito (
    id_carrito INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    productos TEXT,
    total_pagar INT, 

    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
        ON DELETE CASCADE
); 

CREATE TABLE Producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    imagen  TEXT, 
    descripcion TEXT,
    precio INT NOT NULL,
    comentarios TEXT, 
    calificacion FLOAT
);

CREATE TABLE Item (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    id_carrito INT,
    id_producto INT,
    nombre_producto VARCHAR(100) NOT NULL,
    precio_producto INT NOT NULL,
    cantidad INT NOT NULL,  
    subtotal INT NOT NULL, 

    FOREIGN KEY (id_carrito) REFERENCES Carrito(id_carrito)
        ON DELETE CASCADE,

    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
        ON DELETE CASCADE
); 

CREATE TABLE Compra (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_carrito INT,
    id_usuario INT,
    direccion_envio VARCHAR(255) NOT NULL,
    forma_pago VARCHAR(50) NOT NULL,
    tipo_envio VARCHAR(50) NOT NULL,
    total INT NOT NULL,

    FOREIGN KEY (id_carrito) REFERENCES Carrito(id_carrito)
        ON DELETE SET NULL,
        
   FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
   		ON DELETE SET NULL
); 
