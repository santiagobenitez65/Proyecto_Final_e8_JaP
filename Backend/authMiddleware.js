const jwt = require("jsonwebtoken");
const SECRET_KEY = "CLAVE-SECRETA";

function authMiddleware(req, res, next) {
    const token = req.headers["access-token"];

    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado."});
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status (401).json({ message: "Token no autorizado."})
    }
}

module.exports = authMiddleware;