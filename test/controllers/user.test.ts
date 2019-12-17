import request from "supertest";
import app from "../../src/app";

describe("GET /user", () => {
    it("should return 401 Unauthorized", (done) => {
        request(app).get("/user")
            .expect(401, done);
    });
});