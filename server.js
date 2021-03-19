const express = require("express")
const heroesRouter = require("./heroes/heroes-router")

const server = express()

server.use(express.json())

server.use("/heroes", heroesRouter)
server.get("/", (req, res) => {
	res.json({
		message: "Justice Served Daily",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
