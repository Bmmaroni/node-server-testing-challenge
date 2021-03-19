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
		expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
		expect(res.body[0].name).toBe("Batman")
		expect(res.body[2].name).toBe("Flash")
	})

	it("creates a hero", async () => {
		const res = await supertest(server).post("/heroes").send({ name: "Wolverine"})
		expect(res.statusCode).toBe(201)
		expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
		expect(res.body.name).toBe("Wolverine")
	})

	it("removes a hero", async () => {
		const res = await supertest(server).delete("/heroes/2")
		expect(res.statusCode).toBe(200)
		expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
		expect(res.body.name).toBe("Spiderman")
	})
})