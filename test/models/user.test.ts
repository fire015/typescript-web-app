import {User, validateUser} from "../../src/models/user";

jest.mock("../../src/models/db");

describe("user model", () => {
    test("can find a valid user", async () => {
        const data = await validateUser('test@test.com', 'password123') as User;
        expect(data.name).toBe('Tester');
    });

    test("cannot find a valid email", async () => {
        try {
            await validateUser('test@blah.com', 'password123');
        } catch (e) {
            expect(e.message).toBe('Email address not found');
        }
    });

    test("cannot find a valid password", async () => {
        try {
            await validateUser('test@test.com', 'blah');
        } catch (e) {
            expect(e.message).toBe('Incorrect password');
        }
    });
});