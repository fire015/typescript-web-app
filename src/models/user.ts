import {getUsers} from "./db";
import bcrypt from "bcrypt";

export const validateUser = async (email: string, password: string): Promise<User> => {
    const users = getUsers();

    if (!(email in users)) {
        throw new Error('Email address not found');
    }

    const u = users[email];
    const match = await bcrypt.compare(password, u.password);

    if (!match) {
        throw new Error('Incorrect password');
    }

    const user: User = {
        name: u.name,
        email: email
    };

    return user;
};

export interface User {
    name: string;
    email: string;
}