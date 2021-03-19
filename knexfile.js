// Update with your config settings.

module.exports = {

	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './data/heroes.db3'
		},
		migrations: {
			directory: "./data/migrations"
		},
		seeds: {
			directory: "./data/seeds"
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foregin_keys = ON", done)
			}
		}
	}
}
