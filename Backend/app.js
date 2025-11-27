
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const JWT = require("jsonwebtoken");
const SECRET_KEY = "CLAVE-SECRETA";

const productsController = require("./controllers/productsController");
const productsRouter = require("./routes/productsRoute")

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Funciona</h1>")
});

app.use("/login", (req, res) => {
    const { mail, password } = req.body;
    if (mail === "admin@gmail.com" && password === "1234") {
        const token = jwt.sign({ mail }, SECRET_KEY);
        res.status(200).json({ token });
    } else {
        res.status(401).json({ message: "Usuario y/o contraseña incorrecto." });
    }
});

app.use("/products", productsRouter)

/* app.get("/products", productsController.getProducts) */

app.listen(3000, () => {
    console.log("funciona!!!!")
});

