const express = require("express")
const cors = require("cors")
const alchemyRouter = require("./alchemy/alchemy-router")

const server = express()

server.use(cors())
server.use(express.json())

server.use("/alchemy", alchemyRouter)
server.get("/", (req, res) => {
	res.json({
		message: "Let's Make Some GOLD!",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
