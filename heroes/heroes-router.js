const express = require("express")
const Heroes = require("./heroes-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Heroes.find())
	} catch (err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const hero = await Heroes.findById(req.params.id)
		res.json(hero)
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const hero = await Heroes.create(req.body)
		res.status(201).json(hero)
	} catch(err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	try {
		const hero = await Heroes.findById(req.params.id)
		res.status(204).json(hero)
	} catch(err) {
		next(err)
	}
})
module.exports = router