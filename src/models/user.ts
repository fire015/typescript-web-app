import fs from "fs";
import bcrypt from "bcrypt";
import {DB_DIR} from "../config";

export const findUser = async (email, password): Promise<User> => {
    return new Promise<User>(async (resolve, reject) => {
        const users = readDB();

        if (!(email in users)) {
            return reject('Email address not found');
        }

        const u = users[email];
        const match = await bcrypt.compare(password, u.password);

        if (!match) {
            return reject('Incorrect password');
        }

        const user: User = {
            name: u.name,
            email: email
        };

        resolve(user);
    });
};

const readDB = (): object => {
    const file = fs.readFileSync(DB_DIR + '/users.json', 'utf8');
    return JSON.parse(file);
};

export interface User {
    name: string;
    email: string;
}