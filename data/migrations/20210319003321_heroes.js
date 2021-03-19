exports.up = async function(knex) {
	await knex.schema.createTable("heroes", (table) => {
		table.increments()
		table.text("name").notNullable().unique()
	})
}

exports.down = async function(knex) {
	await knex.scheme.dropTableIfExists("heroes")
}