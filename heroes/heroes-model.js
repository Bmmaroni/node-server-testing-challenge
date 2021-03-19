const db = require("../data/config")

function find(){
	return db("heroes")
}

function findById(id){
	return db("heroes")
		.where({ id })
		.first()
}

async function create(data){
	const [id] = await db("heroes").insert(data)
	return findById(id)
}

async function update(id, data){
	await db("heroes").where({ id }).update(data)
	return findById(id)
}

function remove(id){
	return db("heroes").where({ id }).del()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove
}