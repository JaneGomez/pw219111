const express = require('express');
const rutas = express.Router();

//GET es lo que solicita el navegador del cliente
rutas.get("/",(req,res) => {
	res.send("Hola Mundo Node");
});
module.exports = rutas;