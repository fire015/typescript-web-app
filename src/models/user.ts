import {getUsers} from "./db";
import bcrypt from "bcrypt";

export const validateUser = (email: string, password: string): Promise<User> => {
    return new Promise<User>(async (resolve, reject) => {
        const users = getUsers();

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

export interface User {
    name: string;
    email: string;
}