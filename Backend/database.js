import mysql from "mysql2";

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "060505sbp",
    database: "ecommerce"
}).promise()

async function getCart(id) {
    const [cart] = await pool.query(`SELECT * FROM Carrito WHERE id_carrito = ?`, [id]);
    return cart[0];
}

async function postCart(cart, total) {
    return await pool.query("INSERT INTO Carrito (productos, total_pagar) VALUES (?, ?)", [cart, total])
}

async function postProductToCart(id, product) {
    const cart = await getCart(id)
    const newProducts = cart.productos + product;
    return await pool.query(`
        UPDATE Carrito 
        SET productos = "${newProducts}" 
        WHERE id_carrito = ?`, [id]);
}

async function deleteProductFromCart(id, product) {
    const cart = await getCart(id)
    const newProducts = cart.productos.replace(product, "");
    return await pool.query(`
        UPDATE Carrito 
        SET productos = "${newProducts}" 
        WHERE id_carrito = ?`, [id]);
}

async function deleteCart(id) {
    return await pool.query("DELETE FROM Carrito WHERE id_carrito = ?", [id]);
}
