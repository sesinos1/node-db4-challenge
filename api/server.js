const express = require('express');
const helmet = require('helmet');
const cors = require('helmet');


const server = express();

server.get("/", (req, res) => {
	res.send(`<h2>NodeDB IIII Challenge</h2>`);
});

server.use(express.json());


module.exports = server;