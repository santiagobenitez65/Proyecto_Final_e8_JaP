import mysql from "mysql2";

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "060505sbp",
    database: "ecommerce"
}).promise()

export async function getCart() {
    const [cart] = await pool.query(`SELECT * FROM Carrito WHERE id_carrito = 1`);
    return cart[0];
}

async function postCart(cart, total) {
    return await pool.query("INSERT IGNORE INTO Carrito (id_carrito, productos, total_pagar) VALUES (?, ?, ?)", [1, cart, total])
}

async function deleteCart() {
    return await pool.query("DELETE FROM Carrito WHERE id_carrito = 1");
}

export async function postProductToCart(product, total) {
    const cart = await getCart()
    const newProducts = cart.productos + product;
    return await pool.query(`UPDATE Carrito SET productos = "${newProducts}", total_pagar = ${total} WHERE id_carrito = 1`);
}

export async function deleteProductFromCart(product, total) {
    const cart = await getCart()
    const newProducts = cart.productos.replace(product, "");
    return await pool.query(`UPDATE Carrito SET productos = "${newProducts}", total_pagar = ${total} WHERE id_carrito = 1`);
}

export async function clearCart() {
    return await pool.query(`UPDATE Carrito SET productos = "", total_pagar = 0 WHERE id_carrito = 1`)
}
