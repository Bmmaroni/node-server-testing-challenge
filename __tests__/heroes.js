const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach(async () => {
	await db.seed.run()
})

beforeAll(async () => {
	await db.migrate.rollback()
	await db.migrate.latest()
})

afterAll(async () => {
	await db.destroy()
})

describe("heroes integration tests", () => {
	it("gets a list of superheroes", async () => {
		const res = await supertest(server).get("/heroes")
		expect(res.statusCode).toBe(200)
		expect(res.headers).toBe("application/json")  // res.type instead?

	})
})