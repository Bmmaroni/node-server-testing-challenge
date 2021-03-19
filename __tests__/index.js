const supertest = require("supertest")
const server = require("../server")

test("home page", async () => {
	const res = await supertest(server).get("/")
	expect(res.statusCode).toBe(200)
	expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
	expect(res.body.message).toBe("Let's Make Some GOLD!")
})