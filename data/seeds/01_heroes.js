
exports.seed = async function(knex) {
	await knex("heroes").truncate()
	await knex("heroes").insert([
		{name: "Batman"},
		{name: "Spiderman"},
		{name: "Flash"}
	])
}
