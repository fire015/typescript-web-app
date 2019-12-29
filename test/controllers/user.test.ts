import request from "supertest";
import app from "../../src/app";

describe("GET /user", () => {
    test("should return 401 Unauthorized", (done) => {
        request(app).get("/user")
            .expect(401, done);
    });
});

describe("POST /login", () => {
    const agent = request.agent(app);

    test("should set cookie and redirect", (done) => {
        agent.post("/login")
            .send("email=foo%40gmail.com&password=password123")
            .expect(302, done);
    });

    test("should return 200 Ok", (done) => {
        agent.get("/user")
            .expect(200, done);
    });

    test("should return 403 Forbidden", (done) => {
        request(app).post("/login")
            .send("email=foo%40gmail.com&password=test")
            .expect(403, done);
    });
});