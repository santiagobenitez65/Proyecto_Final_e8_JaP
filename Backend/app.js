
const express = require("express");
const cors = require("cors");
const path = require("path");
const authMiddleware = require("./authMiddleware")
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

const SECRET_KEY = "CLAVE-SECRETA"

const productsController = require("./controllers/productsController")

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "Frontend")));


app.get("/", (req, res) => {
    res.send("<h1>Bienvenido al server!</h1>")
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "Frontend", "login.html"));
})

/* Login. Usuario: admin@gmail.com Contraseña: 1234 */
app.post("/login", (req, res) => {
  console.log("BODY /login ->", req.body); 
  const { mail, password } = req.body;

  if (mail === "admin@gmail.com" && password === "1234") {
    const token = jwt.sign({ mail }, SECRET_KEY);
    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ message: "Usuario y/o contraseña incorrecto." });
  }
});

app.get("/products", authMiddleware, productsController.getProducts)

app.listen(port, () => {
    console.log(`Server corriendo en http://localhost:${port}`)
});

