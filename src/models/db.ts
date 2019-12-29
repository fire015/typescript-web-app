import fs from "fs";
import {DB_DIR} from "../config";

export const getUsers = (): object => {
    const file = fs.readFileSync(DB_DIR + '/users.json', 'utf8');
    return JSON.parse(file);
};