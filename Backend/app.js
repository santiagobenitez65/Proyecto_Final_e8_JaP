
const express = require("express");
const cors = require("cors");
const path = require("path");
const authMiddleware = require("./authMiddleware")
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

const SECRET_KEY = "CLAVE-SECRETA"

const catsRouter = require("./routes/catsRoute");
const commentsRouter = require("./routes/commentsRoute");
const productInfoRouter = require("./routes/productInfoRoute");
const productsRouter = require("./routes/productsRoute");

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

app.use("/cats", authMiddleware, catsRouter);

app.use("/products", authMiddleware, productsRouter);

app.use("/product-info", authMiddleware, productInfoRouter);

app.use("/comments", authMiddleware, commentsRouter);

app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`)
});

